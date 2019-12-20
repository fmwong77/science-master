class Api::V1::QuestionsController < ApplicationController
  def index
    questions = Question.all
    render json: questions.to_json(:include => {:answers => {:only => [:text, :answer]}})
  end
end