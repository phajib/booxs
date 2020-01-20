class User < ApplicationRecord
    has_many :books
    has_one :book_list
end
