Rails.application.routes.draw do
  # resources :answers
  # resources :questions
  # resources :scores
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :questions
    end
  end

  # get '/app/src/index', to: 'questions#index'
  # root to app/src/index
end
