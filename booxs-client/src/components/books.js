class Books {
    constructor(users) {
        this.users = users
        this.BOOKS_URL = "http://localhost:3000/api/v1/books"
        this.books = []
        this.adapter = new BooksAdapter()
		this.initBindingsAndEvenListeners()
		this.createNewBookButton()
		this.fetchAndLoadUserBooks()
		this.renderUserBooks()
    }

    initBindingsAndEvenListeners() {
		this.newUserBooksContainer = document.getElementById('new-boox-container')
		this.newBooxFormDiv = document.getElementById('new-boox-form-div')
        this.userTitleContainer = document.getElementById('user-title-container')
		this.logoutButtonDiv = document.getElementById('logout-div')
    }

	createNewBookButton() {
		this.newBooxFormDiv.innerHTML = ""
		const newBookButton = document.createElement('button')
		newBookButton.id = "new-question-button"
		newBookButton.className = "btn btn-default"
		newBookButton.innerText = "New Book"
		const linebreak = document.createElement('br')
		newBookButton.appendChild(linebreak)
		this.newBooxFormDiv.append(newBookButton)
		newBookButton.addEventListener("click", this.adapter.renderNewBookForm.bind(this.adapter))
	}

    fetchAndLoadUserBooks() {
        this.adapter.getBooks()
		.then(books => {
			books["data"].forEach(book => this.books.push(new Book(book["attributes"])))
		})
		.then(() => {
			this.renderUserBooks()
		})
    }

    renderUserBooks() {
		this.newUserBooksContainer.innerHTML = ""
		this.logoutButtonDiv.innerHTML = ""
		this.newUserBooksContainer.innerHTML = this.books.map(book => book.renderLi()).join('')
		// let bookCounter = 1
		// this.books.forEach((book) => {
		// 	const bookDiv = document.createElement('div') // Creates div for each Primary Comment
		// 	bookDiv.className = "book-div"
		// 	bookDiv.id = `book-div-${book.id}`
		// 	bookDiv.setAttribute("data-id", book.id)
		// 	bookDiv.setAttribute("data-user-id", book.user_id)

		// 	// Appends the User's name to the Book
		// 	const nameElement = document.createElement('p')
		// 	let book_user = this.users.find((user) => {
		// 	    return user["attributes"].id === book.user_id
		// 	})
		// 	nameElement.innerHTML = `${book_user["attributes"].name} Book List`
		// 	bookDiv.append(nameElement) // Append name to the div

		// 	// Appends the Book Title to the Book
		// 	let titleElement = document.createElement('p')
		// 	titleElement.innerText = `Book: ${book.title}`
		// 	bookDiv.append(titleElement)
		// })
        this.renderLogoutButton()
    }

    renderLogoutButton() {
		const linebreak = document.createElement('br');
		this.logoutButtonDiv.append(linebreak)
		const logoutBtn = document.createElement('button')
		logoutBtn.id = 'logout-button'
		logoutBtn.innerText = "Logout"
		logoutBtn.className = "btn btn-default"
		this.logoutButtonDiv.append(logoutBtn)
		logoutBtn.addEventListener("click", (event) => {
			window.location.reload(true)
		})
	}
}  