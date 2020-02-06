Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'session#new'

  namespace :api do
    namespace :v1 do
      resources :users do
      # resources :books do
        # resources :users
        # resources :users
        resources :books
      end
      # resources :users
      resources :books
    end
  end

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
end
