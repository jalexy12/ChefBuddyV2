class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :all_users
  realtime_controller({:queue => :redis}) # instruct all requests to enable realtime support via redis

   def realtime_user_id
     return current_user.id if current_user # if using devise, change this to current_user.id
   end

   def realtime_server_url
     # point this to your node.js-socket.io-redis/zmq realtime server (you can set this later)
     return 'http://localhost:5001'
   end

   def all_users
   	 User.all_ids
   end


end
