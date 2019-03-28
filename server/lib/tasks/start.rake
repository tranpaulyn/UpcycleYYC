namespace :start do
    task :development do
      exec 'PORT=3001 npm --cwd client start'
      exec 'PORT=3000 bin/rails server -b 0.0.0.0'
    end
  end
  
  desc 'Start development server'
  task :start => 'start:development'