Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'session#new'

  # namespace :api do
  #   namespace :v1 do
  #     resources :users do
  #       resources :books
  #     end
  #     resources :books
  #   end
  # end

  namespace :api do
    namespace :v1 do
      resources :users
      resources :books
    end
  end

  get '/login' => 'sessions#new'
  post '/logout' => 'sessions#destroy'
  post '/login' => 'sessions#create'
end
