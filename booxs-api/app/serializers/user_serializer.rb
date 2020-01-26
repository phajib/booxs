class UserSerializer
  include FastJsonapi::ObjectSerializer
  has_many :books
  has_one :book_list

  attributes :id, :email, :book_list_id
end
