class ChangeAnswersToInteger < ActiveRecord::Migration[6.0]
  def up
    change_column :answers, :answer, :integer
  end

  def down
    change_column :answers, :answer, :boolean
  end
end
