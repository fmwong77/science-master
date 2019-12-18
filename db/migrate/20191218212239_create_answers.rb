class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.integer :question_id
      t.string :text
      t.string :answer
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
