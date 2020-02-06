// Adapters talks to Backend/API. Purpose of particular adapter
// It's job is to communicate to the API

class BooksAdapter {
	// object
	// When we instantiate BookAdapter it's going to set the URLs and 
	// then we will have the ability to call on the other methods
    constructor() {
		this.BOOKS_URL = "http://localhost:3000/api/v1/books"
		this.USERS_URL = "http://localhost:3000/api/v1/users/"
        this.initBindingAndEventListeners()
    }

    initBindingAndEventListeners() {
		this.newBookFormDiv = document.getElementById('new-boox-form-div')
	}

	// gets FETCH request to BOOKS_URL, then once receiving response from the request
	// parse that json for that particular response.
	// instatnce method
	getBooks() {
        return fetch(this.BOOKS_URL).then(res => res.json())
	}

	// gets FETCH request to USERS_URL, then once receiving response from the request
	// parse that json for that particular response.
	// instatnce method
	getUserBooks(id) {
		return fetch(this.USERS_URL + id).then(res => res.json())
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
}