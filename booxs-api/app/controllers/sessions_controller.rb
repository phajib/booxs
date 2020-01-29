class SessionsController < ApplicationController
    def new
    end

    def create
      if current_user
        redirect_to '/'
      else
        # byebug
        user = User.find_by(email: params[:email])
        if user.email == params[:email]
          session[:current_user_id] = user.id
          render json: user, status: 200
        else
          redirect_to '/login'
        end
      end
    end

    def destroy
      session.clear
      @_current_user = nil
      redirect_to '/'
    end
end
