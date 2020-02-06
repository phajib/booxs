// Books contains the meat our program

class Books {
    constructor(users) {
		// properties for Books
		// Once Books is called variables are set
        this.users = users
		this.BOOKS_URL = "http://localhost:3000/api/v1/books"
		this.USERS_URL = "http://localhost:3000/api/v1/users"
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
		newBookButton.innerText = "Enter New Book"
		const linebreak = document.createElement('br')
		newBookButton.appendChild(linebreak)
		this.newBooxFormDiv.append(newBookButton)
		newBookButton.addEventListener("click", this.adapter.renderNewBookForm.bind(this.adapter))
	}

	// Uses BooksAdapter = adapter
    fetchAndLoadUserBooks() {
		this.adapter.getBooks()
		// After retreiving our Books, we select our books
		.then(books => {
			books["data"].forEach(book => this.books.push(new Book(book["attributes"])))
			// books.forEach(book => this.books.push(new Book(book)))
			console.log(this.books)
		})
		.then(() => {
			// this.renderBooks()
			this.renderUserBooks()
		})
    }

    renderUserBooks() {
		this.newUserBooksContainer.innerHTML = ""
		this.logoutButtonDiv.innerHTML = ""
		this.books.forEach((book) => {
			const bookDiv = document.createElement('div')
			bookDiv.className = "book-div"
			bookDiv.id = `book-div-${book.id}`
			bookDiv.setAttribute("data-id", book.id)
			bookDiv.setAttribute("data-user-id", book.user_id)
			

			const nameElement = document.createElement('p')
			let book_user = this.users.find((user) => {
				return user["attributes"].id === book.user_id
			})
			nameElement.innerHTML = `${book_user["attributes"].name} Book List`
			bookDiv.append(nameElement)

			let titleElement = document.createElement('p')
			titleElement.innerText = `Book: ${book.title}`
			bookDiv.append(titleElement)
		})
		this.newUserBooksContainer.innerHTML = this.books.map(book => book.renderLi()).join('')
        this.renderLogoutButton()
    }

    renderLogoutButton() {
		const logoutBtn = document.createElement('button')
		logoutBtn.id = 'logout-button'
		logoutBtn.className = "btn btn-default"
		logoutBtn.innerText = "Logout"
		this.logoutButtonDiv.append(logoutBtn)
		logoutBtn.addEventListener("click", (event) => {
			window.location.reload(true)
		})
	}
}  