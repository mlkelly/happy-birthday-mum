class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :message
      t.string :img
      t.string :audio

      t.timestamps
    end
  end
end
