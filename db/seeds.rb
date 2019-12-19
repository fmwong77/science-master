# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Questions
# bioquestion1 = Question.create( question: "What body system is in charge of delivering oxygen and nutrients to our cells?")
bioquestion2 = Question.create( question: "What is the difference between arteries and veins?")
bioquestion3 = Question.create( question: "Which body part does not make up our circulatory system?") 
bioquestion4 = Question.create( question: "What system do our lungs belong to?")
bioquestion5 = Question.create( question: "What statement is false about a unicellular organism?")
bioquestion6 = Question.create( question: "What two systems help us get nutrients from our food and deliver them throughout our body?")
bioquestion7 = Question.create( question: "What is an organ system?")
bioquestion8 = Question.create( question: "What is the part of the cell that contains the DNA and controls the cell?")
bioquestion9 = Question.create( question: "What is NOT part of your digestive system?")
bioquestion10 = Question.create( question: "What organ in your body absorbs the majority of nutrients from your food?")






# Answers:
# q1answer1 = Answer.create(text: "Skeletal", answer: 0, question_id: bioquestion1.id)
# q1answer1 = Answer.create(text: "Respiratory", answer: 0, question_id: bioquestion1.id)
# q1answer1 = Answer.create(text: "Circulartory", answer: 1, question_id: bioquestion1.id)
# q1answer1 = Answer.create(text: "Muscular", answer: 0, question_id: bioquestion1.id)

q2answer1 = Answer.create(text: "Arteries carry blood away from the heart, while veins carry blood back to the heart.", answer: 1, question_id: bioquestion2.id)
q2answer2 = Answer.create(text: "Arteries carry oxygenated blood, while veins carry deoxygenated blood.", answer: 0, question_id: bioquestion2.id)
q2answer3 = Answer.create(text: "Arteries carry food to our cells, while veins carry oxygen to our cells.", answer: 0, question_id: bioquestion2.id)
q2answer4 = Answer.create(text: "They are the same thing.", answer: 0, question_id: bioquestion2.id)

q3answer1 = Answer.create(text: "Heart", answer: 0, question_id: bioquestion3.id)
q3answer2 = Answer.create(text: "Veins", answer: 0, question_id: bioquestion3.id)
q3answer3 = Answer.create(text: "Lungs", answer: 1, question_id: bioquestion3.id)
q3answer4 = Answer.create(text: "Arteries", answer: 0, question_id: bioquestion3.id)


q4answer1 = Answer.create(text: "Respiratory", answer: 1, question_id: bioquestion4.id) 
q4answer2 = Answer.create(text: "Digestive", answer: 0, question_id: bioquestion4.id) 
q4answer3 = Answer.create(text: "Muscular", answer: 0, question_id: bioquestion4.id) 
q4answer4 = Answer.create(text: "Nervous", answer: 0, question_id: bioquestion4.id) 

q5answer1 = Answer.create(text: "They have one cell that performs all life processes.", answer: 0, question_id: bioquestion5.id) 
q5answer2 = Answer.create(text: "They respire like all other cells.", answer: 0, question_id: bioquestion5.id) 
q5answer3 = Answer.create(text: "They have different body systems.", answer: 1, question_id: bioquestion5.id) 
q5answer4 = Answer.create(text: "They consist of one cell.", answer: 0, question_id: bioquestion5.id) 


q6answer1 = Answer.create(text: "Digestive and Circulatory", answer: 1, question_id: bioquestion6.id) 
q6answer2 = Answer.create(text: "Circulatory and Respiratory", answer: 0, question_id: bioquestion6.id) 
q6answer3 = Answer.create(text: "Respiratory and Digestive", answer: 0, question_id: bioquestion6.id) 
q6answer4 = Answer.create(text: "Respiratory and Nervous", answer: 0, question_id: bioquestion6.id) 

q7answer1 = Answer.create(text: "Two or more organs that work together to perform a specific function for the organism.", answer: 1, question_id: bioquestion7.id) 
q7answer2 = Answer.create(text: "A pathway for an organism to move throughout the body.", answer: 0, question_id: bioquestion7.id) 
q7answer3 = Answer.create(text: "The group of cells that make up an organ.", answer: 0, question_id: bioquestion7.id) 
q7answer4 = Answer.create(text: "The function of the organ.", answer: 0, question_id: bioquestion7.id) 

q8answer1 = Answer.create(text: "Cell Wall", answer: 0, question_id: bioquestion8.id) 
q8answer2 = Answer.create(text: "Cytoplasm", answer: 0, question_id: bioquestion8.id) 
q8answer3 = Answer.create(text: "Cell Membrane", answer: 0, question_id: bioquestion8.id) 
q8answer4 = Answer.create(text: "Nucleus", answer: 1, question_id: bioquestion8.id)


q9answer1 = Answer.create(text: "Intestines", answer: 0, question_id: bioquestion9.id)
q9answer2 = Answer.create(text: "Heart", answer: 1, question_id: bioquestion9.id)
q9answer3 = Answer.create(text: "Stomach", answer: 0, question_id: bioquestion9.id)
q9answer4 = Answer.create(text: "Mouth", answer: 0, question_id: bioquestion9.id)

q10answer1 = Answer.create(text: "Small Intestine", answer: 1, question_id: bioquestion10.id)
q10answer2 = Answer.create(text: "Stomach", answer: 0, question_id: bioquestion10.id)
q10answer3 = Answer.create(text: "Mouth", answer: 0, question_id: bioquestion10.id)
q10answer4 = Answer.create(text: "Heart", answer: 0, question_id: bioquestion10.id)