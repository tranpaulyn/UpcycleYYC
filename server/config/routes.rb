Rails.application.routes.draw do
  resources :ingredients
  resources :drinks
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :drinks
  end

  match '*path', to: 'pages#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
