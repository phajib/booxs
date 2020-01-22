class Books {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        // this.bindEvenListeners()
        this.fetchAndLoadBooks()
    }

    fetchAndLoadBooks() {
        this.adapter.getBooks().then(books => {
            console.log(books)
        })
    }
}