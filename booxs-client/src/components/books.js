// Books contains the meat our program

class Books {
    constructor(users) {
		// properties for Books
		// Once Books is called variables are set
        this.users = users
		this.BOOKS_URL = "http://localhost:3000/api/v1/books"
		this.USERS_URL = "http://localhost:3000/api/v1/users"
		this.LOGOUT_URL = "http://localhost:3000/logout"
		this.books = []
		this.usersBooks = []
		this.adapter = new BooksAdapter()
		this.adapterL = new LoginAdapter()
		this.initBindingsAndEvenListeners()
		this.createNewandUserBookButton()
		// this.usersBooksButton()
		this.fetchAndLoadBooks()
		// this.fetchAndLoadUsersBooks()
		// this.renderBooks()
		// this.renderUserBooks()
    }

    initBindingsAndEvenListeners() {
		this.newUserBooksContainer = document.getElementById('new-boox-container')
		this.newBooxFormDiv = document.getElementById('new-boox-form-div')
        this.userTitleContainer = document.getElementById('user-title-container')
		this.logoutButtonDiv = document.getElementById('logout-div')
    }

	createNewandUserBookButton() {
		this.newBooxFormDiv.innerHTML = ""
		const newBookButton = document.createElement('button')
		newBookButton.id = "new-book-button"
		newBookButton.className = "btn btn-default"
		newBookButton.innerText = "Enter New Book"
		const linebreak = document.createElement('br')
		newBookButton.appendChild(linebreak)
		this.newBooxFormDiv.append(newBookButton)
		newBookButton.addEventListener("click", this.adapter.renderNewBookForm.bind(this.adapter))

		const userBookBtn = document.createElement('button')
		userBookBtn.id = "user-books-button"
		userBookBtn.className = "btn btn-default"
		userBookBtn.innerText = "View your Books"
		this.newBooxFormDiv.append(userBookBtn)
		// userBookBtn.addEventListener("click", this.fetchAndLoadUsersBooks.bind(this))
		userBookBtn.addEventListener("click", this.renderCurrentUserBooks.bind(this))
	}
	
	// Uses BooksAdapter = adapter
    fetchAndLoadBooks() {
		this.adapter.getBooks()
		// After retreiving our Books, we select our books
		.then(books => {
			// console.log(books)
			books.data.forEach(book => this.books.push(new Book(book.attributes)))
			// console.log(this.books)
			debugger
		})
		.then(() => {
			this.renderBooks()
		})
    }

	renderBooks() {
		this.newUserBooksContainer.innerHTML = ""
		this.logoutButtonDiv.innerHTML = ""
		this.books.forEach((book) => {
			// debugger
			// this.books.map(ubooks => ubooks.renderLi()).join('')
			// this.usersBooks.push(this.users.find((user) => user["attributes"].id === book.user_id).relationships.books.data)
			// this.newUserBooksContainer.innerHTML = this.usersBooks

			// this.usersBooks.map(usersBooks => book.renderLi()).join('')
			// book.renderLi(this.usersBooks).join('')
		// 	this.usersBooks.forEach((book) => {
		// 	const bookDiv = document.createElement('div')
		// 	bookDiv.className = "book-div"
		// 	bookDiv.id = `book-div-${book.id}`
		// 	bookDiv.setAttribute("data-id", book.id)
		// 	bookDiv.setAttribute("data-user-id", book.user_id)


		// 	const nameElement = document.createElement('p')
		// 	let book_user = this.users.find((user) => {
		// 		return user["attributes"].id === book.user_id
		// 	})
		// 	// nameElement.innerHTML = `Created By: ${book_user["attributes"].name}`
		// 	nameElement.innerHTML = `Created By: ${book.name}`
		// 	bookDiv.append(nameElement)

		// 	let titleElement = document.createElement('p')
		// 	titleElement.innerText = `Title: ${book.title}`
		// 	bookDiv.append(titleElement)

		// 	let authorElement = document.createElement('p')
		// 	authorElement.innerText = `Author: ${book.author}`
		// 	bookDiv.append(authorElement)

		// 	const userBookID = document.createElement('p')
		// 	userBookID.innerHTML = `Book: #${book.id}`
		// 	bookDiv.append(userBookID)
		// 	// userBook_counter++

		// 	let imageElement = document.createElement('img')
		// 	imageElement.setAttribute('src',`${book.image}`)
		// 	imageElement.setAttribute('width', '200')
		// 	imageElement.setAttribute('height', '325')
		// 	bookDiv.append(imageElement)

		// 	let descElement = document.createElement('p')
		// 	descElement.innerText = `Description: ${book.description}`
		// 	bookDiv.append(descElement)

		// 	// this.newUserBooksContainer.innerHTML = this.books.map(book => book.renderLi()).join('')
		// 	this.newUserBooksContainer.append(bookDiv)
		// })
		})
		this.newUserBooksContainer.innerHTML = this.books.map(book => book.renderLi()).join('')
		// this.newUserBooksContainer.innerHTML = this.usersBooks.map(book => book.renderLi()).join('')
		// this.newUserBooksContainer.innerHTML = this.users.find((user) => user["attributes"].id === book.user_id).relationships.books.data
        this.renderLogoutButton()
    }

	fetchAndLoadUsersBooks() {
		this.adapter.getUserBooks()
		// debugger
		// After retrieving User's Books, we select our books
		// .then(books => {
			// console.log(books)
			// this.users.find((user) => user["attributes"].id === book.user_id).relationships.books.data
			// books.data.forEach(book => this.books.push(new Book(book.attributes)))
			// debugger
			// books.data.forEach(book => this.books.push(this.users.find((user) => user["attributes"].id === book.user_id).relationships.books.data))
			// users.books.forEach(user => this.usersBooks.push(new User(user.data)))
		// })
		.then(users => {
			console.log(users)
			// debugger
			this.usersBooks.push(users.data.relationships.books.data)

			// this.users.find((user) => user["attributes"].id === book.user_id).relationships.books.data
		})
		.then(() => {
			this.renderUserBooks()
		})
	}
	
	renderCurrentUserBooks(){
		this.adapter.getUserBooks(User.currentUser.id)
		.then(user => this.books = user.books)
        
		.then(() => this.renderUserBooks() )
    }


	renderUserBooks(booksArray = this.books) {
		this.newUserBooksContainer.innerHTML = ""
		this.logoutButtonDiv.innerHTML = ""
		let userBook_counter = 1

		booksArray.forEach((book) => {

			// this.usersBooks.push(this.users.find((user) => user["attributes"].id === book.user_id).relationships.books.data)

			const bookDiv = document.createElement('div')
			bookDiv.className = "book-div"
			bookDiv.id = `book-div-${book.id}`
			bookDiv.setAttribute("data-id", book.id)
			bookDiv.setAttribute("data-user-id", book.user_id)

			const userBooknumber = document.createElement('h3')
			userBooknumber.innerHTML = `Book: #${book.id}`
			bookDiv.append(userBooknumber)
			userBook_counter++

			const nameElement = document.createElement('p')
			let book_user = this.users.find((user) => {
				return user["attributes"].id === book.user_id
			})
			nameElement.innerHTML = `Created By: ${book_user["attributes"].name}`
			bookDiv.append(nameElement)

			let titleElement = document.createElement('p')
			titleElement.innerText = `Book: ${book.title}`
			bookDiv.append(titleElement)

			let authorElement = document.createElement('p')
			authorElement.innerText = `Author: ${book.author}`
			bookDiv.append(authorElement)

			let imageElement = document.createElement('img')
			imageElement.setAttribute('src',`${book.image}`)
			imageElement.setAttribute('width', '200')
			imageElement.setAttribute('height', '325')
			bookDiv.append(imageElement)

			let descElement = document.createElement('p')
			descElement.innerText = `Description: ${book.description}`
			bookDiv.append(descElement)

			this.newUserBooksContainer.append(bookDiv)
		})
        this.renderLogoutButton()
	}

    renderLogoutButton() {
		const logoutBtn = document.createElement('button')
		logoutBtn.id = 'logout-button'
		logoutBtn.className = "btn btn-default"
		logoutBtn.innerText = "Logout"
		this.logoutButtonDiv.append(logoutBtn)

		logoutBtn.addEventListener("click", (event) => {
			this.adapterL.logout.bind(this.adapterL)
			window.location.reload(true)
		})
	}
}  