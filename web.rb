require 'sinatra'

set :bind, '0.0.0.0'

get '/' do
  send_file 'public/index.html'
end

get '/registro' do
  send_file 'public/registro.html'
end

get '/registro_cash_admin_secret9116140600204' do
  send_file 'public/registro_cash.html'
end
