class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true

    has_many :books, dependent: :destroy #, through: :book_list
    # has_one :book_list
end
