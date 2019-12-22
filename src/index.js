window.addEventListener('DOMContentLoaded', () => {
	console.log('It works');

	api_url = 'http://127.0.0.1:3000/api/v1/';
	// 	fetch('http://127.0.0.1:3000/api/v1/questions')
	// 		.then((response) => response.json())
	// 		.then((object) => console.log(object));
	// });
	// let data = {
	// 	username: 'faith',
	// 	score: 50,
	// 	time: '20mins'
	// };

	// const configObject = {
	// 	method: 'POST',
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(data)
	// };
	// fetch(api_url + 'users/', configObject)
	// 	.then((response) => response.json())
  // 	.then((message) => console.log(message));
  let questions;

  fetch(`${api_url}questions`)
  .then(resp => resp.json())
  .then(data => {
    questions = data;
    displayQuestionCategories(data);
  })
  
  function displayQuestionCategories(categories) {
    let categoryArr = [];
    categories.forEach(question => {
      categoryArr.push(question.category)
    })

    let uniqCat = removeDup(categoryArr);

    
    // }

    //Sort through each category and create buttons with IDs
    uniqCat.forEach(category => {
      console.log(category)
      const categoryContainer = document.getElementById('category-container')
      const button = document.createElement('div');
      button.innerText = category
      button.id = category
      button.innerHTML = `
      <img class="card-img-top category-card" src="./images/human.svg" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${category}</p>
      </div>
      `
      console.log(uniqCat)
      // button.style = "width: 18rem;"
      button.classList.add("card");
      button.addEventListener("click", displayQuestions)
      if(button.id === "Body Works: Inside & Out") {
        category.innerHTML= `<img class="card-img-top" src="./images/human.svg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${category}</p>
        </div>`
      }
      categoryContainer.appendChild(button);
      // displayCategoryCards(uniqCat);

    });
  }
      
    //   if(category.id === "Body Works: Inside & Out") {
    //     category.innerHTML= `<img class="card-img-top" src="./images/human.svg" alt="Card image cap">
    //     <div class="card-body">
    //       <p class="card-text">${category}</p>
    //     </div>`
    // }
  function displayQuestions() {
    console.log(questions)
    questions.forEach(question => {
      const questionContainer = document.getElementById('question-container');
      const questionContent = document.createElement('div');
      questionContent.innerText = question.question
      questionContainer.appendChild(questionContent);
    });
    // console.log(this.id)
  }

  function removeDup(categories){
    var catsUnique = categories.filter(function(item, index){
      return categories.indexOf(item) >= index;
    });

    return catsUnique;
  }
});
