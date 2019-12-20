window.addEventListener('DOMContentLoaded', () => {
	console.log('It works');

	fetch('http://127.0.0.1:3000/api/v1/questions')
		.then((response) => response.json())
		.then((object) => console.log(object));
});
