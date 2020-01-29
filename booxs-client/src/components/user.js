class User {
	constructor(userJSON) {
		this.id = userJSON.id
		this.email = userJSON.email
		this.name = userJSON.name
	}

	set current_user(user) {
		this._current_user = user
	}

	get current_user() {
		return this._current_user
	}

	static currentUser(user) { 
		User.currentUser = new User(user)
	}
}
