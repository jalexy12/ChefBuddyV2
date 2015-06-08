class Dish < ActiveRecord::Base
	has_and_belongs_to_many :ingredients

	before_create :set_default_stock

	def set_default_stock
		self.in_stock = true
	end


end
