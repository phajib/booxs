class BookSerializer
  include FastJsonapi::ObjectSerializer
  has_many :users

  attributes :id, :title, :author, :body_matter, :subject, :image, :grade_level
end
