class Books {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        // this.bindEvenListeners()
        this.fetchAndLoadBooks()
    }

    fetchAndLoadBooks() {
        this.adapter.getBooks().then(books => {
            books.forEach(book => this.books.push(book))
        })
        .then(() => {
            this.render()
        })
    }

    render () {
        const booksContainer = document.getElementById('books-container')
        booksContainer.innerHTML = 'books load here'
    }
} 