class LoginAdapter {
	constructor() {
		this.LOGIN_URL = "http://localhost:3000/login"
		this.SIGNUP_URL = "http://localhost:3000/api/v1/users/"
	}

	login(loginJSON) {
		fetch(this.LOGIN_URL, {
			method: "POST", 
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginJSON)
		})
		.then(function(response) {
			return response.json()
		})
		.then(function(user) {
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

	signup(signupJSON) {
		fetch(this.LOGIN_URL, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(signupJSON)
			})
			.then(res => {
				if (status == 200) {
					res.json().then(user => {
						let current_user = new User(user)
						User.currentUser(current_user)
						const signupDiv = document.getElementById('signup-form-div')
						signupDiv.parentNode.removeChild(signupDiv)
						new Users()
					})
				} else {
					res.json().then(data=> { alert(data.message) })
				}
			})
			.catch(error => {
				alert("Error: Signup error")
				console.log(error)
			})
	}
}