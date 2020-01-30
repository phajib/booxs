class SessionsController < ApplicationController
    def new
      @user = User.new
    end

    def create
      # if current_user
      #   redirect_to '/'
      # else
        # byebug
        @user = User.find_by(email: params[:email])
        # if @user.email == params[:email]
        if @user && @user.password == params[:password]
          session[:current_user_id] = @user.id
          # session[:user_id] = @user.id
          render json: @user, status: 200
        else
          redirect_to '/login'
        end
      # end
    end

    def destroy
      session.clear
      @_current_user = nil
      redirect_to '/'
    end
end
