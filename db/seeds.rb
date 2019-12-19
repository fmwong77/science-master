# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Questions
bioquestion1 = Question.create( question: "What body system is in charge of delivering oxygen and nutrients to our cells?")
# bioquestion1 = Question.create( question: "What body system is in charge of delivering oxygen and nutrients to our cells?")

# Answers:
q1answer1 = Answer.create(text: "Skeletal", answer: 0, question_id: bioquestion1.id)
q1answer1 = Answer.create(text: "Respiratory", answer: 0, question_id: bioquestion1.id)
q1answer1 = Answer.create(text: "Circulartory", answer: 1, question_id: bioquestion1.id)
q1answer1 = Answer.create(text: "Muscular", answer: 0, question_id: bioquestion1.id)