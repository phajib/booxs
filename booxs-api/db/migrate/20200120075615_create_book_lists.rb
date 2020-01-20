class CreateBookLists < ActiveRecord::Migration[6.0]
  def change
    create_table :book_lists do |t|
      t.integer :user_id
      t.intger :book_id

      t.timestamps
    end
  end
end
