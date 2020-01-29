class LoginAdapter {
	constructor() {
		this.LOGIN_URL = "http://localhost:3000/login"
		this.SIGNUP_URL = "http://localhost:3000/api/v1/users"
	}

	async submitLogin(jsonObject) {
		await fetch(this.LOGIN_URL, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(jsonObject)
		})
		.then(async function(response) {
		// .then(function(response) {
			return await response.json()
			// return response.json();
			if (res.status < 200 || res.status > 299) {
			throw new Error() }
		})		
		.then(function(user) {
			console.log(user)
			let current_user = new User(user)
			User.currentUser(current_user)

			const loginForm_div = document.getElementById('login-form-div')
			loginForm_div.parentNode.removeChild(loginForm_div)
			new Users()
		})
		.catch(function(error) {
			alert("Error logging in");
			console.log(error.message)
		})
	}

	async submitSignup(jsonObject) {
		await fetch(this.SIGNUP_URL, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(jsonObject)
		})
		.then(async function(response) {
		// .then(function(response) {
			return await response.json()
			// return response.json()
			if (res.status < 200 || res.status > 299) {
			throw new Error() }
		})
		// .then(res => res.json())
		.then(function(user) {
			let current_user = new User(user)
			User.currentUser(current_user)
			const signupDiv = document.getElementById('signup-form-div')
			signupDiv.parentNode.removeChild(signupDiv)
			new Users()
		})
		.catch(function(error) {
			alert("There was an error signing up!");
			console.log(error.message)
		})
	}
}