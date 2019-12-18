class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :user_id
      t.integer :score
      t.string :time
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
