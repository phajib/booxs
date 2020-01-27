class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.integer :book_id
      # t.integer :booklist_id

      t.timestamps
    end
  end
end
