class Post < ApplicationRecord
    validates :name, presence: true
    validates :message, presence: true
end
