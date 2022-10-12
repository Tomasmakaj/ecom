class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.string :image
      t.integer :price
      t.boolean :checked_out

      t.timestamps
    end
  end
end
