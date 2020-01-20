class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.book_list_id :integer

      t.timestamps
    end
  end
end
