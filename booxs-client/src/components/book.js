class Book {
    constructor(bookJSON) {
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.image = bookJSON.image
        this.body_matter = bookJSON.body_matter
    }

    renderLi() {
        return `<div class="col-md-6 col-0-gutter">
                    <div class="ot-portfolio-item">
                         <figure class="effect-bubba">
                            <img src=${this.image} alt="${this.title}" class="img-responsive" />
                            <figcaption>
                                <h2>${this.title}</h2>
                                <p>${this.author}</p>
                                <a href="#" data-toggle="modal" data-target="${bookModal}">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>`
    }

    // const selectModal = document.getElementById(`Modal-${this.id}`)

     const bookModal = () => {`
        <div class="modal fade" id="Modal-${this.id}" tabindex="-1" role="dialog" aria-labelledby="Modal-label-${this.id}">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="Modal-label-${this.id}">${this.title}</h4>
						<h4>${this.author}</h4>
					</div>
					<div class="modal-body">
						<img src="${this.image}" alt="${this.title}" class="img-responsive" />
                        <div class="modal-works">
                            <span><button type="button" class="btn btn-default">Add to Reading List</button><span>
                        </div>
						<p>${this.body_matter}</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
        </div>`
    }
}