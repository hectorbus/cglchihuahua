require "sinatra"

set :bind, '0.0.0.0'

  #  send_file if i get this

get '/' do
  send_file 'public/index.html'
end
