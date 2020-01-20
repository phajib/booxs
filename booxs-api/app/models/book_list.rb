class BookList < ApplicationRecord
    belongs_to :user
    has_many :books
end
