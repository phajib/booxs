class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :author, :body_matter, :subject, :image, :grade_level, :user_id
  
  belongs_to :user
end

