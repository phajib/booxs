class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :author, :description, :image, :user_id #, :book_list_id

  # belongs_to :book_list
  belongs_to :user #, through: :book_list
end

