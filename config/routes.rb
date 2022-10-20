Rails.application.routes.draw do
  resources :locations
  resources :categories
  resources :brands
  resources :carts
  resources :items
  resources :orders
  resources :users
  
  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'
  patch '/update', to: 'users#update'
  delete '/destroy', to: 'users#destroy'
  
  # post '/save_order', to: 'orders#save_order'
  # get '/my_active_orders', to: 'orders#my_active_orders'
  # post '/check_out', to: 'orders#check_out'

  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
