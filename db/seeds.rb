# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Delete old data
Answer.destroy_all
Question.destroy_all

Score.destroy_all
User.destroy_all

# Questions
newtonQuestion1 = Question.create(question: "Which of the following best explains why your body leans to the side when taking a sharp turn in a car?", category: "Newton's Lab")
newtonQuestion2 = Question.create(question: "Which law of motion say that for every action there is an equal and opposite reaction?", category: "Newton's Lab")
newtonQuestion3 = Question.create(question: "If you hit a cotton ball and a golf ball with a golf club, which will accelerate the most?", category: "Newton's Lab")
newtonQuestion4 = Question.create(question: "What is acceleration?", category: "Newton's Lab")
newtonQuestion5 = Question.create(question: "What is a force?", category: "Newton's Lab")
newtonQuestion6 = Question.create(question: "If you are in outer space, and you push a bowling ball away from your chest as hard as you can, what will happen to you?", category: "Newton's Lab")
newtonQuestion7 = Question.create(question: "If you’re at the top of the Empire State Building, and you drop a penny and a quarter off the edge, which one will hit first?", category: "Newton's Lab")
newtonQuestion8 = Question.create(question: "What force resists motion between two objects?", category: "Newton's Lab")
newtonQuestion9 = Question.create(question: "If you hit a golf ball, a cotton ball, and a baseball with an equal amount of force, which will accelerate the most?", category: "Newton's Lab")
newtonQuestion10 = Question.create(question: "If you throw a ball across a field, which forces are most likely to cause it to stop?", category: "Newton's Lab")

# Newton Answers:
newtonQ1A1 = Answer.create(text: "Friction", answer: 0, question_id: newtonQuestion1.id)
newtonQ1A2 = Answer.create(text: "Gravity", answer: 0, question_id: newtonQuestion1.id)
newtonQ1A3 = Answer.create(text: "None of the above", answer: 0, question_id: newtonQuestion1.id)
newtonQ1A4 = Answer.create(text: "Inertia", answer: 1, question_id: newtonQuestion1.id)

newtonQ2A1 = Answer.create(text: "Law 1", answer: 0, question_id: newtonQuestion2.id)
newtonQ2A2 = Answer.create(text: "Law 2", answer: 0, question_id: newtonQuestion2.id)
newtonQ2A3 = Answer.create(text: "Law 3", answer: 1, question_id: newtonQuestion2.id)
newtonQ2A4 = Answer.create(text: "None of the above", answer: 0, question_id: newtonQuestion2.id)

newtonQ3A1 = Answer.create(text: "The golf ball because it has more inertia", answer: 0, question_id: newtonQuestion3.id)
newtonQ3A2 = Answer.create(text: "The cotton ball because it has less mass.", answer: 1, question_id: newtonQuestion3.id)
newtonQ3A3 = Answer.create(text: "They would accelerate equally.", answer: 0, question_id: newtonQuestion3.id)
newtonQ3A4 = Answer.create(text: "Neither would move at all.", answer: 0, question_id: newtonQuestion3.id)

newtonQ4A1 = Answer.create(text: "The rate of change in motion", answer: 1, question_id: newtonQuestion4.id)
newtonQ4A2 = Answer.create(text: "The speed of an object", answer: 0, question_id: newtonQuestion4.id)
newtonQ4A3 = Answer.create(text: "The direction of an object", answer: 0, question_id: newtonQuestion4.id)
newtonQ4A4 = Answer.create(text: "The rate the object slows down", answer: 0, question_id: newtonQuestion4.id)

newtonQ5A1 = Answer.create(text: "Weight", answer: 0, question_id: newtonQuestion5.id)
newtonQ5A2 = Answer.create(text: "Tendency for an object to resist a change in motion", answer: 0, question_id: newtonQuestion5.id)
newtonQ5A3 = Answer.create(text: "A Push or a Pull", answer: 1, question_id: newtonQuestion5.id)
newtonQ5A4 = Answer.create(text: "Mass", answer: 0, question_id: newtonQuestion5.id)

newtonQ6A1 = Answer.create(text: "You and the bowling ball will fly away in opposite directions", answer: 1, question_id: newtonQuestion6.id)
newtonQ6A2 = Answer.create(text: "The bowling ball will fly away, and you will stay still", answer: 0, question_id: newtonQuestion6.id)
newtonQ6A3 = Answer.create(text: "The bowling ball will fly away, and you will fly in the same direction.", answer: 0, question_id: newtonQuestion6.id)
newtonQ6A4 = Answer.create(text: "Neither you or the bowling ball would move", answer: 0, question_id: newtonQuestion6.id)

newtonQ7A1 = Answer.create(text: "They both will hit the ground at the same time.", answer: 1, question_id: newtonQuestion7.id)
newtonQ7A2 = Answer.create(text: "The quarter because it's heavier", answer: 0, question_id: newtonQuestion7.id)
newtonQ7A3 = Answer.create(text: "The Penny because it's lighter", answer: 0, question_id: newtonQuestion7.id)
newtonQ7A4 = Answer.create(text: "Gravity stops and both will start floating upwards", answer: 0, question_id: newtonQuestion7.id)

newtonQ8A1 = Answer.create(text: "Friction", answer: 1, question_id: newtonQuestion8.id)
newtonQ8A2 = Answer.create(text: "Inertia", answer: 0, question_id: newtonQuestion8.id)
newtonQ8A3 = Answer.create(text: "Gravity", answer: 0, question_id: newtonQuestion8.id)
newtonQ8A4 = Answer.create(text: "Mass", answer: 0, question_id: newtonQuestion8.id)

newtonQ9A1 = Answer.create(text: "The Golf ball", answer: 0, question_id: newtonQuestion9.id)
newtonQ9A2 = Answer.create(text: "The Baseball", answer: 0, question_id: newtonQuestion9.id)
newtonQ9A3 = Answer.create(text: "All of them will be the same", answer: 0, question_id: newtonQuestion9.id)
newtonQ9A4 = Answer.create(text: "The Cotton Ball", answer: 1, question_id: newtonQuestion9.id)

newtonQ10A1 = Answer.create(text: "Inertia and Magnetism", answer: 0, question_id: newtonQuestion10.id)
newtonQ10A2 = Answer.create(text: "Friction and Gravity", answer: 1, question_id: newtonQuestion10.id)
newtonQ10A3 = Answer.create(text: "Gravity and Inertia", answer: 0, question_id: newtonQuestion10.id)
newtonQ10A4 = Answer.create(text: "Wind resistance and magnetism", answer: 0, question_id: newtonQuestion10.id)

# Bio Questions:
bioQuestion1 = Question.create( question: "What body system is in charge of delivering oxygen and nutrients to our cells?", category: "Body Works: Inside and Out")
bioQuestion2 = Question.create( question: "What is the difference between arteries and veins?", category: "Body Works: Inside and Out")
bioQuestion3 = Question.create( question: "Which body part does not make up our circulatory system?", category: "Body Works: Inside and Out") 
bioQuestion4 = Question.create( question: "What system do our lungs belong to?", category: "Body Works: Inside and Out")
bioQuestion5 = Question.create( question: "What statement is false about a unicellular organism?", category: "Body Works: Inside and Out")
bioQuestion6 = Question.create( question: "What two systems help us get nutrients from our food and deliver them throughout our body?", category: "Body Works: Inside and Out")
bioQuestion7 = Question.create( question: "What is an organ system?", category: "Body Works: Inside and Out")
bioQuestion8 = Question.create( question: "What is the part of the cell that contains the DNA and controls the cell?", category: "Body Works: Inside and Out")
bioQuestion9 = Question.create( question: "What is NOT part of your digestive system?", category: "Body Works: Inside and Out")
bioQuestion10 = Question.create( question: "What organ in your body absorbs the majority of nutrients from your food?", category: "Body Works: Inside and Out")

# Bio Answers:
bioQ1A1 = Answer.create(text: "Circulatory", answer: 1, question_id: bioQuestion1.id)
bioQ1A2 = Answer.create(text: "Respiratory", answer: 0, question_id: bioQuestion1.id)
bioQ1A3 = Answer.create(text: "Muscular", answer: 0, question_id: bioQuestion1.id)
bioQ1A4 = Answer.create(text: "Skeletal", answer: 0, question_id: bioQuestion1.id)

bioQ2A1 = Answer.create(text: "They are the same thing.", answer: 0, question_id: bioQuestion2.id)
bioQ2A2 = Answer.create(text: "Arteries carry food to our cells, while veins carry oxygen to our cells.", answer: 0, question_id: bioQuestion2.id)
bioQ2A3 = Answer.create(text: "Arteries carry oxygenated blood, while veins carry deoxygenated blood", answer: 0, question_id: bioQuestion2.id)
bioQ2A4 = Answer.create(text: "Arteries carry blood away from the heart, while veins carry blood back to the heart.", answer: 1, question_id: bioQuestion2.id)

bioQ3A1 = Answer.create(text: "Lungs", answer: 1, question_id: bioQuestion3.id)
bioQ3A2 = Answer.create(text: "Arteries", answer: 0, question_id: bioQuestion3.id)
bioQ3A3 = Answer.create(text: "Heart", answer: 0, question_id: bioQuestion3.id)
bioQ3A4 = Answer.create(text: "Veins", answer: 0, question_id: bioQuestion3.id)

bioQ4A1 = Answer.create(text: "Nervous", answer: 0, question_id: bioQuestion4.id)
bioQ4A2 = Answer.create(text: "Respiratory", answer: 1, question_id: bioQuestion4.id)
bioQ4A3 = Answer.create(text: "Digestive", answer: 0, question_id: bioQuestion4.id)
bioQ4A4 = Answer.create(text: "Muscular", answer: 0, question_id: bioQuestion4.id)

bioQ5A1 = Answer.create(text: "The respire like all other cells.", answer: 0, question_id: bioQuestion5.id)
bioQ5A2 = Answer.create(text: "They have one cell that performs all life processes.", answer: 0, question_id: bioQuestion5.id)
bioQ5A3 = Answer.create(text: "They consist of one cell.", answer: 0, question_id: bioQuestion5.id)
bioQ5A4 = Answer.create(text: "They have different body systems.", answer: 1, question_id: bioQuestion5.id)

bioQ6A1 = Answer.create(text: "Digestive and Circulatory", answer: 1, question_id: bioQuestion6.id)
bioQ6A2 = Answer.create(text: "Circulatory and Respiratory", answer: 0, question_id: bioQuestion6.id)
bioQ6A3 = Answer.create(text: "Respiratory and Digestive", answer: 0, question_id: bioQuestion6.id)
bioQ6A4 = Answer.create(text: "Respiratory and Nervous", answer: 0, question_id: bioQuestion6.id)

bioQ7A1 = Answer.create(text: "The function of the organ.", answer: 0, question_id: bioQuestion7.id)
bioQ7A2 = Answer.create(text: "The group of cells that make up an organ.", answer: 0, question_id: bioQuestion7.id)
bioQ7A3 = Answer.create(text: "A pathway for an organism to move throughout the body.", answer: 0, question_id: bioQuestion7.id)
bioQ7A4 = Answer.create(text: "Two or more organs that work together to perform a specific function for the organism.", answer: 1, question_id: bioQuestion7.id)

bioQ8A1 = Answer.create(text: "Nucleus", answer: 1, question_id: bioQuestion8.id)
bioQ8A2 = Answer.create(text: "Cell Wall", answer: 0, question_id: bioQuestion8.id)
bioQ8A3 = Answer.create(text: "Cell Membrane", answer: 0, question_id: bioQuestion8.id)
bioQ8A4 = Answer.create(text: "Cytoplasm", answer: 0, question_id: bioQuestion8.id)

bioQ9A1 = Answer.create(text: "Stomach", answer: 0, question_id: bioQuestion9.id)
bioQ9A2 = Answer.create(text: "Heart", answer: 1, question_id: bioQuestion9.id)
bioQ9A3 = Answer.create(text: "Mouth", answer: 0, question_id: bioQuestion9.id)
bioQ9A4 = Answer.create(text: "Intestines", answer: 0, question_id: bioQuestion9.id)

bioQ10A1 = Answer.create(text: "Small Intestine", answer: 1, question_id: bioQuestion10.id)
bioQ10A2 = Answer.create(text: "Stomach", answer: 0, question_id: bioQuestion10.id)
bioQ10A3 = Answer.create(text: "Mouth", answer: 0, question_id: bioQuestion10.id)
bioQ10A4 = Answer.create(text: "Heart", answer: 0, question_id: bioQuestion10.id)

# Energy Questions:
energyQuestion1 = Question.create(question: "When heat is transferred through a solid object it is:", category: "Energy Matters")
energyQuestion2 = Question.create(question: "When heat is transferred through a liquid or gas it is:", category: "Energy Matters")
energyQuestion3 = Question.create(question: "If you fill a paper cup with water and place it in a fire, why won’t the cup burn right away?", category: "Energy Matters")
energyQuestion4 = Question.create(question: "If I melt 50 grams of ice in 150 grams of water, how much water will I end up with?", category: "Energy Matters")
energyQuestion5 = Question.create(question: "What temperature water created a faster reaction in the volcano?", category: "Energy Matters")
energyQuestion6 = Question.create(question: "If we boil water in a closed system what can we expect to happen to the amount of matter in that system?", category: "Energy Matters")
energyQuestion7 = Question.create(question: "How does the energy change when you change from ice to water?", category: "Energy Matters")
energyQuestion8 = Question.create(question: "You left a hot, open cup of coffee on the table in a cold room for a few hours. What can you expect to change?", category: "Energy Matters")
energyQuestion9 = Question.create(question: "Which of these is the most efficient for of heat transfer?", category: "Energy Matters")
energyQuestion10 = Question.create(question: "If you build a fire while camping, and its really cold outside, and your boots are wet, and you want them to get as hot as possible as fast as possible, what can you do?", category: "Energy Matters")

# Energy Answers:
energyQ1A1 = Answer.create(text: "Conduction", answer: 1, question_id: energyQuestion1.id)
energyQ1A2 = Answer.create(text: "Convection", answer: 0, question_id: energyQuestion1.id)
energyQ1A3 = Answer.create(text: "Radiation", answer: 0, question_id: energyQuestion1.id)
energyQ1A4 = Answer.create(text: "All Three", answer: 0, question_id: energyQuestion1.id)

energyQ2A1 = Answer.create(text: "Convection", answer: 1, question_id: energyQuestion2.id)
energyQ2A2 = Answer.create(text: "All Three", answer: 0, question_id: energyQuestion2.id)
energyQ2A3 = Answer.create(text: "Radiation", answer: 0, question_id: energyQuestion2.id)
energyQ2A4 = Answer.create(text: "Conduction", answer: 0, question_id: energyQuestion2.id)

energyQ3A1 = Answer.create(text: "that's ridiculous, the cup will burn, what a dumb question.", answer: 0, question_id: energyQuestion3.id)
energyQ3A2 = Answer.create(text: "The water absorbs the heat better than the paper", answer: 1, question_id: energyQuestion3.id)
energyQ3A3 = Answer.create(text: "water puts fires out", answer: 0, question_id: energyQuestion3.id)
energyQ3A4 = Answer.create(text: "The fire just wasn't hot enough", answer: 0, question_id: energyQuestion3.id)

energyQ4A1 = Answer.create(text: "0g", answer: 0, question_id: energyQuestion4.id)
energyQ4A2 = Answer.create(text: "50g", answer: 0, question_id: energyQuestion4.id)
energyQ4A3 = Answer.create(text: "150g", answer: 0, question_id: energyQuestion4.id)
energyQ4A4 = Answer.create(text: "200g", answer: 1, question_id: energyQuestion4.id)

energyQ5A1 = Answer.create(text: "They were the same", answer: 0, question_id: energyQuestion5.id)
energyQ5A2 = Answer.create(text: "Cold", answer: 0, question_id: energyQuestion5.id)
energyQ5A3 = Answer.create(text: "We can't make a model volcano with water.", answer: 0, question_id: energyQuestion5.id)
energyQ5A4 = Answer.create(text: "Hot", answer: 1, question_id: energyQuestion5.id)

energyQ6A1 = Answer.create(text: "Water is not made of matter", answer: 0, question_id: energyQuestion6.id)
energyQ6A2 = Answer.create(text: "It will decrease", answer: 0, question_id: energyQuestion6.id)
energyQ6A3 = Answer.create(text: "It will increase", answer: 0, question_id: energyQuestion6.id)
energyQ6A4 = Answer.create(text: "It should stay the same", answer: 1, question_id: energyQuestion6.id)

energyQ7A1 = Answer.create(text: "increases", answer: 1, question_id: energyQuestion7.id)
energyQ7A2 = Answer.create(text: "doesn't change", answer: 0, question_id: energyQuestion7.id)
energyQ7A3 = Answer.create(text: "decreases", answer: 0, question_id: energyQuestion7.id)
energyQ7A4 = Answer.create(text: "explodes", answer: 0, question_id: energyQuestion7.id)

energyQ8A1 = Answer.create(text: "It's colder with less liquid", answer: 1, question_id: energyQuestion8.id)
energyQ8A2 = Answer.create(text: "It's colder with the same amount of liquid", answer: 0, question_id: energyQuestion8.id)
energyQ8A3 = Answer.create(text: "It stays the same temperature with the same amount", answer: 0, question_id: energyQuestion8.id)
energyQ8A4 = Answer.create(text: "It stays the same temperature with less liquid.", answer: 0, question_id: energyQuestion8.id)

energyQ9A1 = Answer.create(text: "Conduction", answer: 1, question_id: energyQuestion9.id)
energyQ9A2 = Answer.create(text: "Radiation", answer: 0, question_id: energyQuestion9.id)
energyQ9A3 = Answer.create(text: "Convection", answer: 0, question_id: energyQuestion9.id)
energyQ9A4 = Answer.create(text: "Heat doesn't transfer", answer: 0, question_id: energyQuestion9.id)

energyQ10A1 = Answer.create(text: "Put your feet in the fire", answer: 1, question_id: energyQuestion10.id)
energyQ10A2 = Answer.create(text: "Put your feet above the fire", answer: 0, question_id: energyQuestion10.id)
energyQ10A3 = Answer.create(text: "Put your feet near the edge of the fire", answer: 0, question_id: energyQuestion10.id)
energyQ10A4 = Answer.create(text: "Build a tent around the fire, and let the air in that tent warm up through convection", answer: 0, question_id: energyQuestion10.id)


