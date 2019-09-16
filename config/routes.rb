Rails.application.routes.draw do

  get 'chatroom', to: 'rooms#show'  
  root 'pages#index'
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
