window.addEventListener('DOMContentLoaded', () => {
	// Declaring/defining Global Variables:
	let username;
	let categoryContainer;
	let questions;
	let scores = 0;
	let next = 0;
	let questionCategory;
	let nextButtonContainer;
	let scoreArray = new Array(10).fill(0);

	function hide(elements) {
		elements = elements.length ? elements : [elements];
		for (var index = 0; index < elements.length; index++) {
			elements[index].style.display = 'none';
		}
	}

	function show(elements) {
		elements = elements.length ? elements : [elements];
		for (var index = 0; index < elements.length; index++) {
			elements[index].style.display = 'block';
		}
	}

	hide(document.getElementById('result-container'));
	// hide(document.getElementById('pagination'));
	hide(document.getElementById('score-panel'));
	api_url = 'http://127.0.0.1:3000/api/v1/';

	fetch(`${api_url}questions`)
		.then((resp) => resp.json())
		.then((data) => {
			questions = data;
			displayQuestionCategories(data);
		});

	function displayQuestionCategories(categories) {
		let categoryArr = [];
		categories.forEach((question) => {
			categoryArr.push(question.category);
		});
		//Iterate through two arrays to get image and name card data
		let uniqCat = removeDup(categoryArr);
		const imgCat = ['isaac-newton', 'chromosome', 'power'];
		const catDesc = [
			'Test your knowledge of the human body!',
			"Let's see how well you know your physics!",
			'Test your knowledge of Electricity!'
		];
		let categoryContainer = document.getElementById('category-container');
		let classes = ['row', 'justify-content-center', 'justify-content-around'];
		categoryContainer.classList.add(...classes);
		var i;
		for (i = 0; i < uniqCat.length; i++) {
			const button = document.createElement('div');
			button.classList.add('card', 'text-center');
			button.style.width = '14rem';
			button.id = uniqCat[i];
			button.innerHTML = `
      <img class="card-img-top img-card card-style" src="./images/${imgCat[i]}.svg" alt="${imgCat[i]}">
      <div class="card-body category-card">
        <h4 class="card-title">${uniqCat[i]}</h4>
        <p class="card-text">${catDesc[i]}</p>
      </div>
      </div>
      `;
			button.addEventListener('click', () => selectCategory(button));
			categoryContainer.appendChild(button);
		}
	}

	function selectCategory(category) {
		// This variable stores the selected category for use in displaying questions:
		const categoryId = category.id;
		category.classList.add('shadow-drop-2-center');
		setTimeout(displayUserForm, 800, categoryId);
	}

	function displayUserForm(category) {
		let categoryContainer = document.getElementById('category-container');
		categoryContainer.setAttribute('class', ' ');
		categoryContainer.classList.add(
			'slide-in-left',
			'container',
			'form-container'
		);
		categoryContainer.innerHTML = `
    <div class = "row justify-content-center">
    <div class = "col-6">
    <h2 id= "selection-text"> You selected ${category}!</h2>
    <form id = "user">
    <div class="form-group">
    <input type="text" name="username" placeholder="Create a Username to play" class= "form-control form-control-lg"><br>
    <input id="switchCategory" type="button" class="btn btn-primary" value="Select Other Trivia Category">
    <input type="submit" class="btn btn-primary" value="Let's Play!">
    </div>
    </form> 
    </div>  
    </div> 
		`;
		questionCategory = category;

		let submit = document.getElementById('user');
		submit.addEventListener('submit', createUser);

		let switchCategory = document.getElementById('switchCategory');
		switchCategory.addEventListener('click', showHome);
	}

	function createUser() {
		event.preventDefault();
		let nameInput = document.querySelector('input');
		username = nameInput.value;
		if (username.trim() === '') {
			JSalert('Oops', 'Please enter username to play', 'error');
		} else {
			//From this function, you can now access both the username and the quiz they selected:
			beginQuiz();
		}
	}

	var Clock = {
		totalSeconds: 0,
		start: function() {
			if (!this.interval) {
				var self = this;
				function pad(val) {
					return val > 9 ? val : '0' + val;
				}
				this.interval = setInterval(function() {
					self.totalSeconds += 1;

					document.getElementById('min').innerHTML = pad(
						Math.floor((self.totalSeconds / 60) % 60)
					);
					document.getElementById('sec').innerHTML = pad(
						parseInt(self.totalSeconds % 60)
					);
				}, 1000);
			}
		},
		stop: function() {
			clearInterval(this.interval);
			delete this.interval;
		}
	};

	function JSalert(title, messageContent, icon) {
		swal(title, messageContent, icon);
	}

	function beginQuiz() {
		event.preventDefault();
		let nameInput = document.querySelector('input');
		categoryContainer = document.getElementById('category-container');
		categoryContainer.classList.add('hide');

		let count = 0;
		hide(document.getElementById('title-panel'));
		show(document.getElementById('score-panel'));
		displayScorePanel();
		displayQuestions(count);
		Clock.start();
	}

	function displayScorePanel() {
		const scorePanel = document.getElementById('score-panel');
		show(scorePanel);
		// scorePanel.innerHTML = ' ';
		scorePanel.classList.add('card');

		// Creating the new elements:
		const scorePanelRow = document.createElement('div');
		scorePanelRow.classList.add('row');
		const scorePanelCol = document.createElement('div');
		scorePanelCol.setAttribute('style', 'text-align:center;');
		scorePanelCol.classList.add('col');
		scorePanelRow.appendChild(scorePanelCol);
		scorePanel.appendChild(scorePanelRow);

		scorePanelCol.innerHTML = `
		<h3 id="score">Score: ${scores}</h3>
		<h3>Time: <span id="min">00</span>:<span id="sec">00</span></h3>
		`;
	}

	function displayQuestions() {
		hide(document.getElementById('user'));
		show(document.getElementById('question-box'));
		show(document.getElementById('question-box'));
		let questionRow = document.getElementById('question-row');
		questionRow.classList.add('slide-in-left');

		let questionsByCat = questions.filter(function(e) {
			return e.category === questionCategory;
		});

		show(document.getElementById('pagination'));

		for (i = next; i < questionsByCat.length; i++) {
			const questionContainer = document.getElementById('question-container');
			questionContainer.innerHTML = '';
			const questionContent = document.createElement('h4');
			questionContent.classList.add('question-heading');
			questionContent.innerText = questionsByCat[i].question;
			questionContainer.appendChild(questionContent);

			nextButtonContainer = document.getElementById('next-button-container');
			nextButtonContainer.innerHTML = '';

			const answers = questionsByCat[i].answers;
			const answerContainer = document.getElementById('answer-container');
			answerContainer.innerHTML = '';
			answers.forEach((answer) => {
				const answerContent = document.createElement('button');
				const buttonClasses = ['ui', 'orange', 'basic', 'button'];
				answerContent.className = 'block';
				answerContent.classList.add(...buttonClasses);
				answerContent.setAttribute('data-isCorrect', answer.answer);

				if (i === questionsByCat.length - 1) {
					answerContent.setAttribute('data-isLastQuestion', true);
				} else {
					answerContent.setAttribute('data-isLastQuestion', false);
				}

				answerContent.innerText = answer.text;
				answerContent.addEventListener('click', displayNextOrSubmit);
				answerContainer.appendChild(answerContent);
				const br = document.createElement('br');
				answerContainer.appendChild(br);
			});

			return;
		}
	}

	function displayNextOrSubmit() {
		calculateScores(this.getAttribute('data-isCorrect'), next, this);

		const nextDiv = document.createElement('div');
		nextDiv.innerHTML = '';
		if (this.getAttribute('data-islastquestion') === 'true') {
			nextDiv.innerHTML = `<input type="button" class="btn btn-primary" value="Submit">`;
			nextDiv.addEventListener('click', () =>
				submit(this.getAttribute('data-isCorrect'))
			);
		} else {
			nextDiv.innerHTML = `<input type="button" class="btn btn-primary" value="Next">`;
			nextDiv.addEventListener('click', () =>
				showNext(this.getAttribute('data-isCorrect'))
			);
		}

		nextButtonContainer.appendChild(nextDiv);
		disableAllOtherAnswer(this);
	}

	function disableAllOtherAnswer(ele) {
		const c = document.getElementById('answer-container').childNodes;
		const img = document.getElementById('beakerIcon');
		console.log(c);

		for (let i = 0; i < c.length; i++) {
			if (i % 2 === 0) {
				if (ele.getAttribute('data-isCorrect') === 0) {
					if (c[i].getAttribute('data-isCorrect') === 1) {
						const buttonClasses = ['ui', 'green', 'basic', 'button'];
						c[i].classList.add(...buttonClasses)
						img.classList.toggle('jackInTheBox')

					}
					if (c[i].getAttribute('data-isCorrect') === 'false' && c[i] != ele) {
						const buttonClasses = ['ui', 'grey', 'basic', 'button'];
						c[i].classList.add(...buttonClasses)
						img.classList.toggle('wobble-hor-bottom');

						
					}
				}else{
					if (c[i] != ele) {
						c[i].classList.add('grey');
					}

				}
				c[i].disabled = true;
			}
		}
	}

	function calculateScores(isCorrect, count, ele) {
		let img = document.getElementById('beakerIcon');
		ele.classList.remove('block');
		if (isCorrect === '1') {
			ele.classList.add('rightAnswer');
			const buttonClasses = ['ui', 'green', 'basic', 'button'];
			ele.classList.add(...buttonClasses)
			scoreArray[count] = 10;
			// let beaker = document.getElementById('beakerIcon');
			img.classList.toggle('jackInTheBox')

		} else {
			ele.classList.add('wrongAnswer');
			let beaker = document.getElementById('beakerIcon');
			const buttonClasses = ['ui', 'red', 'basic', 'button'];
			ele.classList.add(...buttonClasses)
			scoreArray[count] = 0;
			img.classList.toggle('wobble-hor-bottom');

		}
		const scoreCard = document.getElementById('score');
		scores = scoreArray.reduce(sumFunc);
		scoreCard.innerText = `Score: ${scores}`;
		img.src = `./images/beaker${scores}.svg`;
	

	}

	function sumFunc(sum, a) {
		return sum + a;
	}

	function showNext() {
		next++;
		pagination({ target: selectAll('circle')[next] });
		displayQuestions();
	}

	function fetchRanking() {
		fetch(`${api_url}scores`)
			.then((resp) => resp.json())
			.then((data) => {
				displayRanking(data);
			});
	}

	function submit() {
		Clock.stop();

		const minute = document.getElementById(min);
		const second = document.getElementById(sec);
		const totalTime = `${min.innerText}:${sec.innerText}`;

		hide(document.getElementById('score-panel'));
		show(document.getElementById('title-panel'));
		hide(document.getElementById('question-box'));

		let data = {
			username: username,
			score: scores,
			time: totalTime
		};

		const configObject = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		};

		fetch(api_url + 'users/', configObject)
			.then((response) => response.json())
			.then((message) => fetchRanking());

		showResult(totalTime);
	}

	function showResult(totalTime) {
		const questionContainer = document.getElementById('question-container');
		questionContainer.innerHTML = '';
		const answerContainer = document.getElementById('answer-container');
		answerContainer.innerHTML = '';
		const nextButtonContainer = document.getElementById(
			'next-button-container'
		);
		nextButtonContainer.innerHTML = '';

		hide(document.getElementById('pagination'));

		JSalert(
			'Good Job!',
			`You completed the trivia in ${totalTime} and your scores is ${scores}!`,
			'success'
		);

		// fetchRanking();
	}

	function showHome() {
		location.reload();
	}

	function removeDup(categories) {
		var catsUnique = categories.filter(function(item, index) {
			return categories.indexOf(item) >= index;
		});

		return catsUnique;
	}

	var xmlns = 'http://www.w3.org/2000/svg',
		xlinkns = 'http://www.w3.org/1999/xlink',
		select = function(s) {
			return document.querySelector(s);
		},
		selectAll = function(s) {
			return document.querySelectorAll(s);
		},
		size = 20;

	TweenMax.set('svg', {
		visibility: 'visible'
	});

	select('#joinLine').setAttribute('stroke-width', size);
	var maskSource = select('#circleGroup').cloneNode(true);
	maskSource.id = '';
	maskSource.setAttribute('fill', '#FFF');
	maskSource.setAttribute('stroke', '#777777');
	maskSource.setAttribute('stroke-width', 5);
	select('#radioMask').appendChild(maskSource);
	select('#mainGroup').setAttribute('mask', 'url(#radioMask)');
	let pagination = function(e) {
		var target = e.target;
		if (target.tagName == 'circle') {
			var id = target.id;

			var tl = new TimelineMax();
			tl.to('#joinLine', 0.3, {
				attr: {
					x2: target.getAttribute('cx')
				},
				strokeWidth: 0,
				ease: Power2.easeIn
			})
				.to(
					'#joinLine',
					1,
					{
						attr: {
							x1: target.getAttribute('cx')
						},
						ease: Elastic.easeOut.config(1, 0.76)
					},
					'+=0'
				)
				.to(
					'#joinLine',
					2,
					{
						strokeWidth: size,
						ease: Elastic.easeOut.config(1, 0.8)
					},
					'-=1'
				);

			tl.timeScale(2);
		}
	};

	function displayRanking(topScores) {
		show(document.getElementById('result-container'));
		const resultContainer = document.getElementById('result-container');
		const table = document.getElementById('t01');

		let count = 1;

		for (const score in topScores) {
			let tr = document.createElement('tr');
			tr.innerHTML = `<tr>
          <td>${count}</td>
          <td>${topScores[score].user.username}</td>
          <td>${topScores[score].score}</td>
          <td>${topScores[score].time}</td>
				</tr>`;
			table.appendChild(tr);
			count++;
		}

		const playAgain = document.createElement('button');
		playAgain.innerText = "Let's Play Again";
		playAgain.className = 'btn btn-primary';
		// playAgain.classList.add('btn');

		playAgain.addEventListener('click', showHome);
		resultContainer.appendChild(playAgain);
	}

	//automate the first one
	pagination({
		target: selectAll('circle')[0]
	});
});
