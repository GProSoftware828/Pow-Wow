Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :dashboard

  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  get 'chatroom', to: 'rooms#show'  
  root to: "static#home"
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
