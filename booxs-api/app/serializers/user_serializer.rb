class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :email, :password

  has_many :books #, through: :book_list
  # has_one :book_list
end
