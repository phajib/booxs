class Books {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        this.initBindingsAndEvenListeners()
        this.fetchAndLoadBooks()
    }

    initBindingsAndEvenListeners() {
        this.booksContainer = document.getElementById('books-container')
        this.booksContainer.addEventListener('dblclick', function(){
            console.log('double clicked')
        })
    }

    fetchAndLoadBooks() {
        this.adapter.getBooks()
        .then(books => {
            books.forEach(book => this.books.push(new Book(book))) 
            
        })
        .then(() => {
            this.render()
        })
    }

    render () {
        this.booksContainer.innerHTML = this.books.map(book => book.renderLi()).join('')
    }
}  