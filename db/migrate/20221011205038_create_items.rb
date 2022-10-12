class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :image
      t.integer :category_id
    	t.integer :brand_id
      t.integer :price
      t.string :size
      t.boolean :is_sold, default: false

      t.timestamps
    end
  end
end
