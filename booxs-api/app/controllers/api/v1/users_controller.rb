class Api::V1::UsersController < ApplicationController
    def index
        # if params[:book_id]
        #     users = Book.find(params[:book_id]).users
        # else
        #     users = User.all
        # end
        # render json: UserSerializer.new(users)
        users = User.all
        render json: UserSerializer.new(users)
    end

    def new
        @user = User.new
    end

    def create
        user = User.create(user_params)
        if user.save
          # still just adding a key/value pair to the session hash
          session[:user_id] = user.id
          render json: user, status: :created
        else
            render :new
            render json: {
                error: user.errors
            }, status: :unprocessable_entity
        end
        # user = User.create(user_params)
        # if user.valid?
        #     session[:current_user_id] = user.id
        #     render json: user, status: 200
        #     # render json: UserSerializer.new(user), status: 200
        # else
        #     flash[:message] = "Failed to create user"
        #     render :new
        # end
    end

    def show
        user = User.find(params[:id])
       # options = { include: [:books] }
        #render json: UserSerializer.new(user, options)
        render json: user, include: [:books]
    end

    private 
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end
