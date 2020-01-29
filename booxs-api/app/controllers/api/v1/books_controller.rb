class Api::V1::BooksController < ApplicationController
    def index
        books = Book.all
        # render json: books
        options = { include: [:user] }
        render json: BookSerializer.new(books, options)
        # render json: BookSerializer.new(books)
    end

    def new
        @book = Book.new
    end
    

    def show
        book = Book.find(params[:id])
        render json: BookSerializer.new(book)
        # render json: book
    end

    def create
        book = Book.create(book_params)
        if book
            books = Book.all
            options = { include: [:user] }
            render json: BookSerializer.new(book, options)
            # render json: Book.new(book), status: 200
            # render json: book
        end
    end

    def update
        book = Book.find(params[:id])
        book.update(book_params)
        render json: BookSerializer.new(book)
        # render json: book
    end

    def destroy
        book = Book.find(params[:id])
        book.delete

        render json: { book_id: book.id }
    end

    private
        def book_params
            params.require(:book).permit(:id, :title, :author, :description, :image, :user_id)
        end
end
