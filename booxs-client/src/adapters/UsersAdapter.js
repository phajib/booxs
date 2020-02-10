class UsersAdapter {
	constructor() {
		this.USERS_URL = "http://localhost:3000/api/v1/users"
	}

	getUsers() {
		return fetch(this.USERS_URL).then(res => res.json())
	}
}