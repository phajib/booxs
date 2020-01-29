class ApplicationController < ActionController::API
    before_action :current_user

  	def index
  		render :login
  	end

  	def current_user
  		@current_log_user ||= session[:current_user_id] &&
      	User.find_by(id: session[:current_user_id])
  	end
end
