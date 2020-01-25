class Api::V1::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def new
        @user = User.new
        @book_list = BookList.new
    end

    def create
        @user = User.create(user_params)
        @book_list = BookList.create(book_list_params)
        if user.valid? 
            session[:current_user_id] = user.id
            session[:current_user_id] = book_list.id
            render json: @user, except: [:created_at, :updated_at]
            render json: @book_list, status 200
        else
            render :new
        end
    end
end
