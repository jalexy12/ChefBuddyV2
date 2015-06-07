class CreateDishes < ActiveRecord::Migration
  def change
    create_table :dishes do |t|
      t.string :name
      t.text :description
      t.boolean :in_stock
      t.integer :price

      t.timestamps null: false
    end
  end
end
