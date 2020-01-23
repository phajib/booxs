class Book {
    constructor(noteJSON) {
        this.id = noteJSON.id
        this.title = noteJSON.title
        this.author = noteJSON.author
        this.body_matter = noteJSON.body_matter
    }

    renderLi() {
        return `<li data-id=${this.id}>${this.title}</li>`
    }
}