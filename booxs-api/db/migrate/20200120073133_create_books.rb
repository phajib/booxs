class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :subject
      t.grade_level :integer
      t.user_id :integer

      t.timestamps
    end
  end
end
