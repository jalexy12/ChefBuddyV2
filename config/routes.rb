Rails.application.routes.draw do
  resources :ingredients
  resources :dishes
  devise_for :users
 
end
