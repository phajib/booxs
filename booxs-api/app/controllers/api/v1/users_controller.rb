class Api::V1::UsersController < ApplicationController
    def index
        if params[:book_id]
            users = Book.find(params[:book_id]).users
        else
            users = User.all
        end
        render json: UserSerializer.new(users)
    end

    def new
        @user = User.new
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:current_user_id] = user.id
            render json: user, status: 200
            # render json: UserSerializer.new(user), status: 200
        else
            render :new
        end
    end

    def show
        user = User.find_by(params[:id])
        render json: UserSerializer.new(user)
    end

    private 
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end
