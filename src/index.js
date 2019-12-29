window.addEventListener('DOMContentLoaded', () => {
  // Declaring/defining Global Variables:
  let categoryContainer;



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
     //Iterate through two arrays to get image and name card data
    let uniqCat = removeDup(categoryArr);
    const imgCat = ["chromosome", "isaac-newton", "power"]
    let categoryContainer = document.getElementById('category-container')
    var i;
    for (i = 0; i < uniqCat.length; i++) {
      const button = document.createElement('div');
      // button.classList.add("shadow-drop-2-center");
      button.classList.add('card');
      button.classList.add('text-center');
      button.style.width = "12rem";
      button.id = uniqCat[i]
      button.innerHTML = `
      <img class="card-img-top img-card" src="./images/${imgCat[i]}.svg" alt="${imgCat[i]}">
      <div class="card-body category-card">
        <h4 class="card-title">${uniqCat[i]}</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
      `
      button.addEventListener("click", () => selectCategory(button))
      categoryContainer.appendChild(button);
    }
  
  }

  function selectCategory(category) {
    // This variable stores the selected category for use in displaying questions:
    const categoryId = category.id
    let categoryContainer= document.getElementById('category-container');
    // This is a good start point for adding animations to transitions. Leaving to come back to it: 
    // categoryContainer.classList.add('fade-in-top')
    // category.classList.add('selected-category');
    category.classList.add('shadow-drop-2-center'); 
    setTimeout(displayUserForm, 800, categoryId);
  }

  function displayUserForm(category) {
    let categoryContainer= document.getElementById('category-container');
    categoryContainer.classList.add('slide-in-left');
    categoryContainer.innerHTML = `
    <h2> You selected ${category}!</h2>
    <form id = "user">
    <p>Create a Username to play:<p>
    <input type="text" name="username"><br>
    <input type="submit" value="Let's Play!">
    </form>    
    `
    let submit = document.getElementById('user');
    submit.addEventListener("submit", () => createUser(category))
  }

  function createUser(category) {
    event.preventDefault()
    let nameInput = document.querySelector('input')
    let username = nameInput.value
    //From this function, you can now access both the username and the quiz they selected:
    console.log(username)
    console.log(category)
  }
 
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
