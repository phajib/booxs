class CreateBookLists < ActiveRecord::Migration[6.0]
  def change
    create_table :book_lists do |t|
      t.user_id :integer
      t.book_id :intger

      t.timestamps
    end
  end
end
