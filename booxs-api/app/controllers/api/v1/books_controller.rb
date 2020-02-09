class Api::V1::BooksController < ApplicationController
    def index
        # byebug
        # books = current_user.Book.all.order("created_at DESC")
        books = Book.all.order("created_at DESC")
        options = { include: [:user] }
        render json: BookSerializer.new(books, options), status: 200
    end

    def new
        @book = Book.new
    end
    
    def show
        book = Book.find(params[:id])
        render json: BookSerializer.new(book)
    end

    def create
        book = Book.new(book_params)
        # if book.save
        #     books = Book.all
        #     options = { include: [:user] }
        #     render json: BookSerializer.new(book, options), status: 200
        # end
        if book
            books = Book.all.order("created_at DESC")
            options = { include: [:user] }
            render json: BookSerializer.new(books, options), status: 200
        end
    end

    def update
        book = Book.find(params[:id])
        book.update(book_params)
        options = { include: [:user] }
        render json: BookSerializer.new(book, options), status: 200
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
