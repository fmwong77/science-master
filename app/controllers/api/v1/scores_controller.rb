class Api::V1::ScoresController < ApplicationController
    def index
    top_scores = Score.order(score: :desc, time: :asc).limit(5)
    render json: top_scores.to_json(:include => {:user => {:only => [:username]}})
  end
end
