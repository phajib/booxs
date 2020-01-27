class BookListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :userid, :bookid
  
  # belongs_to :user
  # has_many :books, through: :user
end
