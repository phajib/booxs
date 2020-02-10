// Adapters talks to Backend/API. Purpose of particular adapter
// It's job is to communicate to the API

class BooksAdapter {
	// object
	// When we instantiate BookAdapter it's going to set the URLs and 
	// then we will have the ability to call on the other methods
    constructor() {
		this.BOOKS_URL = "http://localhost:3000/api/v1/books"
		this.USERS_URL = "http://localhost:3000/api/v1/users/"
		this.usersBooks = []
		this.books = []
        this.initBindingAndEventListeners()
    }

    initBindingAndEventListeners() {
		this.newBookFormDiv = document.getElementById('new-boox-form-div')
	}

	// gets FETCH request to BOOKS_URL, then once receiving response from the request
	// parse that json for that particular response.
	// instance method
	getBooks() {
        return fetch(this.BOOKS_URL).then(res => res.json())
	}

	// gets FETCH request to USERS_URL, then once receiving response from the request
	// parse that json for that particular response.
	// instance method
	getUserBooks() {
		return fetch(this.USERS_URL + User.currentUser.id)
		.then(res => res.json())
		.then(console.log())
	}

	renderNewBookForm() {
		// New Book Form <form id="new-book-form" method="post" action=""></form>
		const bookForm = document.createElement('form')
		bookForm.id = "new-book-form"
		bookForm.setAttribute("method", "post")
		bookForm.setAttribute("action", "")

		const formGroup = document.createElement('div')
		formGroup.setAttribute("class", "form-group")
		formGroup.appendChild(bookForm)		
		this.newBookFormDiv.appendChild(formGroup)

		const h = document.createElement('h2')
		h.innerHTML = "New Book Form"
		bookForm.appendChild(h)

		const hr = document.createElement('hr')
		bookForm.appendChild(hr)

		const br = document.createElement('br')
		bookForm.appendChild(br)

		const titleLabel = document.createElement('title-label'); // Append Textarea
		titleLabel.innerHTML = "Title : ";
		bookForm.appendChild(titleLabel);

		// <input class="form-control" type="text" name="title" required>
		const titleElement = document.createElement('input');
		titleElement.setAttribute("class", "form-control");
		titleElement.setAttribute("type", "text");
		titleElement.setAttribute("name", "title");
		titleElement.setAttribute("required", "");
		bookForm.appendChild(titleElement);

		bookForm.appendChild(br)

		const authorLabel = document.createElement('author-label');
		authorLabel.innerHTML = "Author : ";
		bookForm.appendChild(authorLabel);

		const authorElement = document.createElement('input');
		authorElement.setAttribute("type", "text");
		authorElement.setAttribute("name", "author");
		authorElement.setAttribute("required", "");
		authorElement.setAttribute("class", "form-control");
		bookForm.appendChild(authorElement);

		bookForm.appendChild(br)

		const desclabel = document.createElement('desc-label');
		desclabel.innerHTML = "Description : ";
		bookForm.appendChild(desclabel);
		// <textarea class="form-control" name="description" required>
		const descTextareaElement = document.createElement('textarea');
		descTextareaElement.setAttribute("class", "form-control")
		descTextareaElement.setAttribute("name", "description");
		descTextareaElement.setAttribute("required", "");
		bookForm.appendChild(descTextareaElement);

		const imageLabel = document.createElement('image-label');
		imageLabel.innerHTML = "Image URL : ";
		bookForm.appendChild(imageLabel);
		// <input class="form-control" type="src" name="image" required>
		const imageElement = document.createElement('input');
		imageElement.setAttribute("class", "form-control");
		imageElement.setAttribute("type", "src");
		imageElement.setAttribute("name", "image");
		imageElement.setAttribute("required", "");
		bookForm.appendChild(imageElement);

		// <input type="hidden" name="${user_id}" value="${User.currentUser.id}">
		const current_user_id = document.createElement('input')
		current_user_id.setAttribute("type", "hidden")
		current_user_id.setAttribute("name", "user_id")
		current_user_id.setAttribute("value", User.currentUser.id)
		bookForm.appendChild(current_user_id)

		bookForm.appendChild(hr)
		bookForm.appendChild(br)

		const submitElement = document.createElement('input')
		submitElement.setAttribute("type", "submit")
		submitElement.setAttribute("name", "submit")
		submitElement.setAttribute("value", "Submit Book")
		submitElement.className = "btn btn-default"
		bookForm.appendChild(submitElement)

		const cancelNewBookBtn = document.createElement('input')
		cancelNewBookBtn.setAttribute("type", "button");
		cancelNewBookBtn.setAttribute("value", "Cancel")
		cancelNewBookBtn.id = "cancel-primary-form-button"
		cancelNewBookBtn.className = "btn btn-default"
		bookForm.appendChild(cancelNewBookBtn)
		cancelNewBookBtn.addEventListener("click", (event) => {
			bookForm.parentNode.removeChild(bookForm)
			new Users()
		})

		bookForm.addEventListener("submit", (e) => {
			e.preventDefault()
			let form_data = new FormData(bookForm)
			let jsonObject = {}
			for (const [key, value] of form_data.entries()) {
				jsonObject[key] = value
			}
			this.createBook(jsonObject)
		})
	}

	createBook(createBookJSON) {
		const book = {
			title: createBookJSON.title,
			author: createBookJSON.author,
			description: createBookJSON.description,
			image: createBookJSON.image,
			user_id: createBookJSON.user_id
		}
		return fetch(this.BOOKS_URL, {
			method: "POST",
			// credentials: "include",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(book)
		})
		.then(response => {
			return response.json()
		})
		.then(() => {
			new Users()
		})
	}

	fetchAndLoadUsersBooks() {
		this.getUserBooks()
		// After retreiving User's Books, we select our books
		.then(users => {
			console.log(users)
			// users.data.forEach(user => this.usersBooks.push(new User(user.relationships.data)))
			// this.users.find((user) => user["attributes"].id === book.user_id).relationships.books.data //this gives current Users books
			users.data.forEach(user => this.usersBooks.push(new User(user.relationships.data)))
			console.log(this.users)
		})
		.then(() => {
			this.renderUserBooks()
		})
	}
	
	// renderUserBooks() {
	// 	this.newUserBooksContainer.innerHTML = ""
	// 	this.logoutButtonDiv.innerHTML = ""
	// 	let userBook_counter = 1

	// 	this.books.forEach((book) => {
	// 		const bookDiv = document.createElement('div')
	// 		bookDiv.className = "book-div"
	// 		bookDiv.id = `book-div-${book.id}`
	// 		bookDiv.setAttribute("data-id", book.id)
	// 		bookDiv.setAttribute("data-user-id", book.user_id)

	// 		const userBooknumber = document.createElement('h3')
	// 		userBooknumber.innerHTML = `Book: #${book.id}`
	// 		bookDiv.append(userBooknumber)
	// 		userBook_counter++

	// 		const nameElement = document.createElement('p')
	// 		let book_user = this.users.find((user) => {
	// 			return user["attributes"].id === book.user_id
	// 		})
	// 		nameElement.innerHTML = `Created By: ${book_user["attributes"].name}`
	// 		bookDiv.append(nameElement)

	// 		let titleElement = document.createElement('p')
	// 		titleElement.innerText = `Book: ${book.title}`
	// 		bookDiv.append(titleElement)

	// 		let authorElement = document.createElement('p')
	// 		authorElement.innerText = `Author: ${book.author}`
	// 		bookDiv.append(authorElement)

	// 		let imageElement = document.createElement('img')
	// 		imageElement.setAttribute('src',`${book.image}`)
	// 		imageElement.setAttribute('width', '200')
	// 		imageElement.setAttribute('height', '325')
	// 		bookDiv.append(imageElement)

	// 		let descElement = document.createElement('p')
	// 		descElement.innerText = `Description: ${book.description}`
	// 		bookDiv.append(descElement)

	// 		this.newUserBooksContainer.append(bookDiv)
	// 	})
    //     books.renderLogoutButton()
	// }
}