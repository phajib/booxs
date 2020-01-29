class userLogin {
	constructor() {
		this.initBindingAndEventListeners()
        this.adapter = new LoginAdapter()
		this.renderLoginButton()
		// this.books = new Books()
	}

	initBindingAndEventListeners() {
		this.loginForm_div = document.getElementById('login-form-div')
		this.signupForm_div = document.getElementById('signup-form-div')
		this.login_signup_button_div = document.getElementById('login-signup-button-div')
	}
	
	renderSignUpButton(loginBtn) {
		const signUpButton = document.createElement('button')
		signUpButton.id = "signup-button"
		signUpButton.setAttribute("data-id", "signup-button")
		signUpButton.innerText = "Signup"
		signUpButton.className = "btn btn-default"
		this.login_signup_button_div.append(signUpButton)
		signUpButton.addEventListener("click", () =>  {
			loginBtn.parentNode.removeChild(loginBtn)
			signUpButton.parentNode.removeChild(signUpButton)
			this.renderSignupForm()
		})
	}

	renderSignupForm() {
		const formGroupDiv = document.createElement('div')
		formGroupDiv.setAttribute("class", "form-group")
		this.signupForm_div.appendChild(formGroupDiv)

		const signUpForm = document.createElement('form') // Create New Form Element
		signUpForm.id = "signup-form"
		signUpForm.setAttribute("action", "") // Setting Action Attribute on Form
		signUpForm.setAttribute("method", "post") // Setting Method Attribute on Form
		formGroupDiv.appendChild(signUpForm)

		const heading = document.createElement('h2') // Heading of Form
		heading.innerHTML = "Signup Form"
		signUpForm.appendChild(heading)

		const line = document.createElement('hr') // Giving Horizontal Row After Heading
		signUpForm.appendChild(line)

		const linebreak = document.createElement('br')
		signUpForm.appendChild(linebreak)

		const namelabel = document.createElement('label') // Create Label for Name Field
		namelabel.innerHTML = "Name : " // Set Field Labels
		signUpForm.appendChild(namelabel)

		const nameElement = document.createElement('input') // Create Input Field for Name
		nameElement.setAttribute("type", "text")
		nameElement.setAttribute("name", "name")
		nameElement.setAttribute("required", "")
		nameElement.setAttribute("class", "form-control")
		signUpForm.appendChild(nameElement)

		signUpForm.appendChild(linebreak)

		const emailLabel = document.createElement('label') // Create Label for Name Field
		emailLabel.innerHTML = "Email: " // Set Field Labels
		signUpForm.appendChild(emailLabel)

		signUpForm.appendChild(linebreak)

		const emailElement = document.createElement('input') // Create Input Field for Email
		emailElement.setAttribute("type", "text")
		emailElement.setAttribute("name", "email")
		emailElement.setAttribute("required", "")
		emailElement.setAttribute("class", "form-control")
		signUpForm.appendChild(emailElement)

		signUpForm.appendChild(linebreak)

		const password_label = document.createElement('label') // Create Label for Password Field
		password_label.innerHTML = "Password : "
		signUpForm.appendChild(password_label)

		const passwordElement = document.createElement('input') // Create Input Field for Password
		passwordElement.setAttribute("type", "password")
		passwordElement.setAttribute("name", "password")
		passwordElement.setAttribute("required", "")
		passwordElement.setAttribute("class", "form-control")
		signUpForm.appendChild(passwordElement)

		signUpForm.appendChild(linebreak)

		const submitElement = document.createElement('input'); // Append Submit Button
		submitElement.setAttribute("type", "submit");
		submitElement.setAttribute("name", "submit");
		submitElement.setAttribute("value", "Signup");
		submitElement.className = "btn btn-default"
		signUpForm.appendChild(submitElement);

		signUpForm.addEventListener("submit", (event) => {
			event.preventDefault()
			let form_data = new FormData(signUpForm)
			let jsonObject = {}
			for (const [key, value] of form_data.entries()) {
				jsonObject[key] = value
			}
			this.adapter.submitSignup(jsonObject) // Send form data to LoginAdapter for fetching to API
		})
	}

	renderLoginButton() {
		const loginBtn = document.createElement('button') // Create New Form Element
		loginBtn.id = "login-button"
		loginBtn.setAttribute("data-id", "login-button")
		loginBtn.innerText = "Login"
		loginBtn.className = "btn btn-default"
		this.login_signup_button_div.append(loginBtn)
		this.renderSignUpButton(loginBtn)
		
		const signup_button = document.getElementById("signup-button")
		loginBtn.addEventListener("click", () =>  {
			loginBtn.parentNode.removeChild(loginBtn)
			signup_button.parentNode.removeChild(signup_button)
			this.renderLoginForm()
		})
	}

	renderLoginForm() {
		const formGroupDiv = document.createElement('div')
		formGroupDiv.setAttribute("class", "form-group")
		this.loginForm_div.appendChild(formGroupDiv)

		const loginForm = document.createElement('form') 
		loginForm.id = "login-form"
		loginForm.setAttribute("action", "")
		loginForm.setAttribute("method", "post")
		formGroupDiv.appendChild(loginForm)

		const heading = document.createElement('h2')
		heading.innerHTML = "Login Form"
		loginForm.appendChild(heading)

		const line = document.createElement('hr') // Giving Horizontal Row After Heading
		loginForm.appendChild(line)

		const linebreak = document.createElement('br')
		loginForm.appendChild(linebreak)

		const emailLabel = document.createElement('label')
		emailLabel.innerHTML = "Email: "
		loginForm.appendChild(emailLabel)

		const emailElement = document.createElement('input')
		emailElement.setAttribute("type", "text")
		emailElement.setAttribute("name", "email")
		emailElement.setAttribute("required", "");
		emailElement.setAttribute("class", "form-control")
		loginForm.appendChild(emailElement)

		// loginForm.appendChild(linebreak)

		const passwordLabel = document.createElement('label') // Create Label for Password Field
		passwordLabel.innerHTML = "Password : "
		loginForm.appendChild(passwordLabel)

		const passwordElement = document.createElement('input') // Create Input Field for Password
		passwordElement.setAttribute("type", "password")
		passwordElement.setAttribute("name", "password")
		passwordElement.setAttribute("required", "");
		passwordElement.setAttribute("class", "form-control")
		loginForm.appendChild(passwordElement)

		// loginForm.appendChild(linebreak)

		const submitElement = document.createElement('input');
		submitElement.setAttribute("type", "submit");
		submitElement.setAttribute("name", "submit");
		submitElement.setAttribute("value", "Login");
		submitElement.className = "btn btn-default"
		loginForm.appendChild(submitElement);

		loginForm.addEventListener("submit", (event) => {
			event.preventDefault()
			let form_data = new FormData(loginForm)
			let jsonObject = {}
			for (const [key, value] of form_data.entries()) {
				jsonObject[key] = value
			}
			this.adapter.submitLogin(jsonObject)
		})
	}
}
