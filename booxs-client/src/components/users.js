class Users {
	constructor(current_user) {
		this.users = []
		this.adapter = new UsersAdapter()
		this.initBindingAndEventListeners()
		this.fetchAndLoadUsers()
	}

	initBindingAndEventListeners() {
		this.userBooxContainer = document.getElementById('user-title-container')
	}

	fetchAndLoadUsers() {
		this.adapter.getUsers()
		.then(users => {
			users["data"].forEach(user => this.users.push(user))
		})
		.then(() => {
			this.renderUserBooxName()
		})
	}

	renderUserBooxName() {
		this.userBooxContainer.innerHTML = ""
		this.userBoox = document.createElement('h2')
		this.userBoox.innerHTML = `Welcome to Booxs ${User.currentUser.name}!`
		this.userBooxContainer.append(this.userBoox)
		new Books(this.users)
	}
}