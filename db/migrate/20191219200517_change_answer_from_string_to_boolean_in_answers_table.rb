class ChangeAnswerFromStringToBooleanInAnswersTable < ActiveRecord::Migration[6.0]
  def up
    change_column :answers, :answer, :boolean
  end

  def down
    change_column :answers, :answer, :string
  end
end
