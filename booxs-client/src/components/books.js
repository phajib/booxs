class Books {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        this.initBindingsAndEvenListeners()
        this.fetchAndLoadBooks()
        // this.fetchAndLoadUser()
    }

    initBindingsAndEvenListeners() {
        this.booksContainer = document.getElementById('books-container')
        // this.booksContainer.addEventListener('dblclick', function(){
        //     console.log('double clicked')
        // })
    }

    fetchAndLoadBooks() {
        this.adapter.getBooks()
        .then(books => {
            books.forEach(book => this.books.push(new Book(book)))
        })
        .then(() => {
            this.renderBooks()
        })
    }

    renderBooks () {
        this.booksContainer.innerHTML = this.books.map(book => book.renderLi()).join('')
    }

    // fetchAndLoadUser() {
        // check if there is a User login
        // 
    // }
}  