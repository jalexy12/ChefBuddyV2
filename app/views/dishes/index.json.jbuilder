json.array!(@dishes) do |dish|
  json.extract! dish, :id, :name, :price, :in_stock, :ingredients  
  json.url dish_url(dish, format: :json)
end
