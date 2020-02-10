class LoginAdapter {
	constructor() {
		this.LOGIN_URL = "http://localhost:3000/login"
		this.LOGOUT_URL = "http://localhost:3000/logout"
		this.SIGNUP_URL = "http://localhost:3000/api/v1/users/"
	}

	login(userData) {
		fetch(this.LOGIN_URL, {
			method: "POST",
			// credentials: "include",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		})
		.then(response => response.json())
		.then(user => {
			// console.log(user)
			let current_user = new User(user)
			User.currentUser(current_user)

			const loginForm_div = document.getElementById('login-form-div')
			loginForm_div.parentNode.removeChild(loginForm_div)
			new Users()
		})
		.catch(error => {
			alert("Error: check your login details");
			console.log(error.message)
		})
	}

	signup(userData) {
		fetch(this.SIGNUP_URL, {
		method: "POST",
		// credentials: "include",
		headers: {
			'Content-Type': 'application/json' //Tells server expect to receive JSON in this body of request
			// "Accept": "application/json"
		},
		body: JSON.stringify(userData)
		})
		.then(response => response.json())
		.then(user => {
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

	logout() {
		fetch(this.LOGOUT_URL, {
			method: "POST",
  			headers: {
    			"Content-Type": "application/json",
    		}
		})
  		.then(response => response.json())
		.then(console.log)
	}
}