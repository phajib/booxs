class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def new
        @user = User.new
        # book_list = BookList.new
    end

    def create
        user = User.create(user_params)
        book_list = BookList.create(book_list_params)
        if user.valid? 
            session[:current_user_id] = user.id
            # session[:current_user_id] = book_list.id
            render json: UserSerializer.new(user)
            render json: user, status: 200
            # render json: BookListSerializer.new(book_list)
        else
            render :new
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: UserSerializer.new(user)
    end

    private 
    def user_params
        params.require(:user).permit(:email)
    end
    
    def book_list_params
        params.require(:book_list).permit(:user_id, :book_id)
    end
end
