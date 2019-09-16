Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]

  get 'chatroom', to: 'rooms#show'  
  root to: 'static#home'
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
