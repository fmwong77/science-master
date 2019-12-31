window.addEventListener('DOMContentLoaded', () => {
	// Declaring/defining Global Variables:
	let username;
	let categoryContainer;
	let questions;
	let questionId = 1;
	let scores = 0;
	let next = 0;
	let questionCategory;
	let nextContainer;

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

	hide(document.getElementById('pagination'));
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
		const imgCat = ['chromosome', 'isaac-newton', 'power'];
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
			<input type="submit" class="btn btn-primary" value="Let's Play!">
			</div>
			</form> 
			</div>  
			</div> 
		`;
		questionCategory = category;

		let submit = document.getElementById('user');
		submit.addEventListener('submit', createUser);
	}

	function createUser() {
		event.preventDefault();
		let nameInput = document.querySelector('input');
		username = nameInput.value;
		//From this function, you can now access both the username and the quiz they selected:
		beginQuiz();
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

	function beginQuiz() {
		event.preventDefault();
		let nameInput = document.querySelector('input');
		categoryContainer = document.getElementById('category-container');
		categoryContainer.classList.add('hide');
		if (nameInput.value.trim() === '') {
			alert('Please enter user name to begin');
		} else {
			// let username = nameInput.value.trim();
			//From this function, you can now access both the username and the quiz they selected:
			let count = 0;
			displayQuestions(count);
			Clock.start();
		}
	}

	function displayScorePanel() {
		const scorePanel = document.getElementById('score-panel');
		scorePanel.innerHTML = " ";
		scorePanel.classList.add('card');
		
		// Creating the new elements:
		const scorePanelRow = document.createElement('div');
		scorePanelRow.classList.add('row');
		const scorePanelCol = document.createElement('div');
		scorePanelCol.setAttribute('style', 'text-align:center;');
		scorePanelCol.classList.add('col');
		scorePanelRow.appendChild(scorePanelCol);
		scorePanel.appendChild(scorePanelRow);

		scorePanelCol.innerHTML= `
		<h3>Score: ${scores}</h3>
		<h3>Time: <span id="min">00</span>:<span id="sec">00</span></h3>
		`
	}
	function displayQuestions() {
		const userForm = document.getElementById('user');
		userForm.classList.add('hide');
		const questionBox = document.getElementById('question-box');
		questionBox.classList.add('show');
		displayScorePanel();

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

			nextContainer = document.getElementById('next-button-container');
			nextContainer.innerHTML = '';

			const answers = questionsByCat[i].answers;
			// let answerId = 1;
			const answerContainer = document.getElementById('answer-container');
			answerContainer.innerHTML = '';
			answers.forEach((answer) => {
				const answerContent = document.createElement('button');
				const buttonClasses= ['ui', 'orange', 'basic', 'button', 'p-2']
				answerContent.classList.add(...buttonClasses);
				answerContent.id = answer.id;
				answerContent.setAttribute('data-isCorrect', answer.answer);

				if (i === questionsByCat.length - 1) {
					answerContent.setAttribute('data-isLastQuestion', true);
				} else {
					answerContent.setAttribute('data-isLastQuestion', false);
				}
				

				answerContent.innerText = answer.text;

				// answerContent.addEventListener('click', answerInteraction)
				// setTimeout(isAnswerCorrect, 800);
				answerContent.addEventListener('click', isAnswerCorrect);
				answerContainer.appendChild(answerContent);
				// answerId++;
			});

			return;
		}
	}
// See this function for event listener added to the next/submit buttons:
	function isAnswerCorrect() {
		// console.log(this.getAttribute('data-isCorrect'));
		// answerInteraction();
		console.log(this);
		
		
		
		let answer= this;
		let correctness = answer.getAttribute('data-isCorrect');
		console.log(correctness);
		
		
		const nextDiv = document.createElement('div');
		if (answer === 'true') {
			nextDiv.innerHTML = `<input type="button" class="btn btn-primary" value="Submit">`;
			nextDiv.addEventListener('click', () => answerInteraction(correctness));	
			// submit(this.getAttribute('data-isCorrect'))
		} else {
			nextDiv.innerHTML = `<input type="button" class="btn btn-primary" value="Next">`;
			// nextDiv.addEventListener('click', () =>
			// 	showNext(this.getAttribute('data-isCorrect'))
			// );
			nextDiv.addEventListener('click', () => answerInteraction(correctness));
		}

		nextContainer.appendChild(nextDiv);
	}

	function answerInteraction(answer) {
		const answerContainer = document.getElementById('answer-container');
		const answers = answerContainer.childNodes;
		const answerInput = answer
		// console.log(truthiness)
		for (let i = 0; i < answers.length; i++) {
			// console.log(answers[i])
			let truthiness = answers[i].getAttribute('data-iscorrect');
			// let button = document.getElementById('')
			console.log(truthiness)

			if (truthiness === "true") {
				answers[i].classList.add('correct')
				
			} else {
				answers[i].classList.add('incorrect')
			}
		}
		setTimeout(isAnswerCorrect, 800, answerInput)
	}
	function calculateScores(isCorrect) {
		if (isCorrect === 'true') {
			scores = scores + 10;
		}
		console.log(scores);
	}

	function showNext(isCorrect) {
		calculateScores(isCorrect);
		next++;
		pagination({ target: selectAll('circle')[next] });
		displayQuestions();
	}

	function submit(isCorrect) {
		Clock.stop();
		calculateScores(isCorrect);

		const minute = document.getElementById(min);
		const second = document.getElementById(sec);
		const totalTime = `${min.innerText}:${sec.innerText}`;

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
			.then((message) => console.log(message));

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

		const resultContainer = document.getElementById('result-container');
		resultContainer.innerHTML = `
    <div class = "row justify-content-center">
    <div class = "col-6">
    <h3> Your scores is ${scores}!</h3>
    <h3> You completed the trivia in ${totalTime}!</h3>
    <input id="play-again" type="button" class="btn btn-primary" value="Let's Play Again!">
    </div>  
    </div> 
		`;

		const playAgain = document.getElementById('play-again');
		playAgain.addEventListener('click', showHome);
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

	//automate the first one
	pagination({ target: selectAll('circle')[0] });
});
