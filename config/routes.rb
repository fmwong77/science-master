Rails.application.routes.draw do
  # resources :answers
  # resources :questions
  # resources :scores
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # get '/', :to => redirect('/index.html')
  root :to => 'home#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :questions
      resources :scores, only: [:index]
    end
  end

end
