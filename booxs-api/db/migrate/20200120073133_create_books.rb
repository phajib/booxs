class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :subject
      t.integer :grade_level
      t.integer :user_id

      t.timestamps
    end
  end
end
