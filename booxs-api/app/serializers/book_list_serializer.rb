class BookListSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :user
  has_many :books, through: :user
  
  attributes :user_id, :book_id
end
