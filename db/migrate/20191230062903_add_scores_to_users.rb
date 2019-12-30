class AddScoresToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :scores, :integer
  end
end
