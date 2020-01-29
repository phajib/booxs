class BooksAdapter {
    constructor() {
        this.BOOKS_URL = "http://localhost:3000/api/v1/books"
        this.initBindingAndEventListeners()
    }

    initBindingAndEventListeners() {
		this.newBookFormDiv = document.getElementById('new-boox-form-div')
	}

    getBooks() {
        return fetch(this.BOOKS_URL).then(res => res.json())
    }

	createBook(createBookJSON) {
		// createBookJSON.preventDefault();
		const book = {
			title: createBookJSON.title,
			author: createBookJSON.author,
			description: createBookJSON.description,
			image: createBookJSON.image,
			user_id: createBookJSON.user_id
		}
		return fetch(this.BOOKS_URL, {
			method: "POST",
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
		// const newBookBtn = document.getElementById('new-book-button')
		// newBookBtn.parentNode.removeChild(newBookBtn)  // Removes 'New Book' button after it is clicked

		const bookForm = document.createElement('form') // Create New Form Element
		bookForm.id = "new-book-form"
		bookForm.setAttribute("action", "") // Setting Action Attribute on Form
		bookForm.setAttribute("method", "post") // Setting Method Attribute on Form
		
		const formGroupDiv = document.createElement('div')
		formGroupDiv.setAttribute("class", "form-group")
		formGroupDiv.appendChild(bookForm)		
		this.newBookFormDiv.appendChild(formGroupDiv)

		const heading = document.createElement('h2') // Heading of Form
		heading.innerHTML = "New Book Form"
		bookForm.appendChild(heading)

		const line = document.createElement('hr') // Giving Horizontal Row After Heading
		bookForm.appendChild(line)

		const linebreak = document.createElement('br')
		bookForm.appendChild(linebreak)

		const titleLabel = document.createElement('title-label'); // Append Textarea
		titleLabel.innerHTML = "Title : ";
		bookForm.appendChild(titleLabel);

		const titleElement = document.createElement('input');
		titleElement.setAttribute("type", "text");
		titleElement.setAttribute("name", "title");
		titleElement.setAttribute("required", "");
		titleElement.setAttribute("class", "form-control");
		bookForm.appendChild(titleElement);

		bookForm.appendChild(linebreak)

		const authorLabel = document.createElement('author-label'); // Append Textarea
		authorLabel.innerHTML = "Author : ";
		bookForm.appendChild(authorLabel);

		const authorElement = document.createElement('input');
		authorElement.setAttribute("type", "text");
		authorElement.setAttribute("name", "author");
		authorElement.setAttribute("required", "");
		authorElement.setAttribute("class", "form-control");
		bookForm.appendChild(authorElement);

		bookForm.appendChild(linebreak)

		const desclabel = document.createElement('desc-label'); // Append Textarea
		desclabel.innerHTML = "Description : ";
		bookForm.appendChild(desclabel);

		const descTextareaElement = document.createElement('textarea');
		descTextareaElement.setAttribute("name", "description");
		descTextareaElement.setAttribute("required", "");
		descTextareaElement.setAttribute("class", "form-control")
		bookForm.appendChild(descTextareaElement);

		// insert image URL
		const imageLabel = document.createElement('image-label'); // Append Textarea
		imageLabel.innerHTML = "Image URL : ";
		bookForm.appendChild(imageLabel);

		const imageElement = document.createElement('input');
		imageElement.setAttribute("type", "src");
		imageElement.setAttribute("name", "image");
		imageElement.setAttribute("required", "");
		imageElement.setAttribute("class", "form-control");
		bookForm.appendChild(imageElement);

		const current_user_id = document.createElement('input') // Appends the current User's ID to the form
		current_user_id.setAttribute("type", "hidden")
		current_user_id.setAttribute("name", "user_id")
		current_user_id.setAttribute("value", User.currentUser.id)
		bookForm.appendChild(current_user_id)

		// const messagebreak = document.createElement('br');
		// bookForm.appendChild(messagebreak);
		bookForm.appendChild(line)
		bookForm.appendChild(linebreak)

		const submitElement = document.createElement('input'); // Append Submit Button
		submitElement.setAttribute("type", "submit");
		submitElement.setAttribute("name", "dsubmit");
		submitElement.setAttribute("value", "Submit Book");
		submitElement.className = "btn btn-default"
		bookForm.appendChild(submitElement);

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

		bookForm.addEventListener("submit", (event) => {
			event.preventDefault()
			let form_data = new FormData(bookForm)
			let jsonObject = {}
			for (const [key, value] of form_data.entries()) {
				jsonObject[key] = value
			}
			this.createBook(jsonObject)
		})
	}
}