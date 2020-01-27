class CreateBookLists < ActiveRecord::Migration[6.0]
  def change
    create_table :book_lists do |t|
      t.integer :userid
      t.integer :bookid

      t.timestamps
    end
  end
end
