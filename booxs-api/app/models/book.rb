class Book < ApplicationRecord
    # belongs_to :book_list
    belongs_to :user #, through: :book_list
end
