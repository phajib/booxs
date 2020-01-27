class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email

  has_many :books
  # has_one :book_list
end
