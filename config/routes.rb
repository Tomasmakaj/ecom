Rails.application.routes.draw do
  resources :categories
  resources :brands
  resources :carts
  resources :items
  resources :orders
  resources :users
  
  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'
  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
