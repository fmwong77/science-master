class Api::V1::UsersController < ApplicationController
  def create
    # byebug
    user = User.create(username: params[:username])
    score = Score.create(score: params[:score], time: params[:time])
    user.score = score
    user.save()
    render json: {message: 'User created'}
  end
end
