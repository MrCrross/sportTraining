const exerciseTypeSeeder = require('./exerciseType.seeder')
const trainingTypeSeeder = require('./trainingType.seeder')
const userSeeder = require('./user.seeder')
const quoteSeeder = require('./quote.seeder')
const exerciseSeeder = require('./exercise.seeder')
const trainingSeeder = require('./training.seeder')
const trainingExerciseSeeder = require('./trainingExercise.seeder')
const courseSeeder = require('./course.seeder')
const courseTrainingSeeder = require('./courseTraining.seeder')


const seed = async ()=>{
    await exerciseTypeSeeder._init()
    await trainingTypeSeeder._init()
    await userSeeder._init()
    await quoteSeeder._init()
    await exerciseSeeder._init()
    await trainingSeeder._init()
    await trainingExerciseSeeder._init()
    await courseSeeder._init()
    await courseTrainingSeeder._init()
}

module.exports= seed()
