window.addEventListener('DOMContentLoaded', () => {
	console.log('It works');

	api_url = 'http://127.0.0.1:3000/api/v1/';
	// 	fetch('http://127.0.0.1:3000/api/v1/questions')
	// 		.then((response) => response.json())
	// 		.then((object) => console.log(object));
	// });
	let data = {
		username: 'faith',
		score: 50,
		time: '20mins'
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
});
