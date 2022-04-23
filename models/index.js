const sequelize = require('../db')
const {DataTypes} = require("sequelize");


const ExerciseType = sequelize.define('exerciseType', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const Exercise = sequelize.define('exercise', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.TEXT},
    duration: {type: DataTypes.INTEGER},
    rest: {type: DataTypes.INTEGER},
    repetitions: {type: DataTypes.INTEGER},
})

const TrainingType = sequelize.define('trainingType', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const User = sequelize.define('user', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    last_name: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Training = sequelize.define('training', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const TrainingExercise = sequelize.define('trainingExercise', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    chain:{type:DataTypes.INTEGER}
})

const Quote  = sequelize.define('quote', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT,unique:true},
    author: {type: DataTypes.STRING},
})

const Course = sequelize.define('course', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT,unique:true},
})

const CourseTraining = sequelize.define('courseTraining', {
    courseId:{type: DataTypes.BIGINT, primaryKey: true},
    day:{type:DataTypes.INTEGER, primaryKey: true},
})

Exercise.belongsTo(ExerciseType)
ExerciseType.hasMany(Exercise)

Training.belongsTo(TrainingType)
TrainingType.hasMany(Training)

Training.belongsTo(User)
User.hasMany(Training)

Training.hasMany(TrainingExercise)
Exercise.hasMany(TrainingExercise)

TrainingExercise.belongsTo(Exercise)
TrainingExercise.belongsTo(Training)

Training.hasMany(CourseTraining)
Course.hasMany(CourseTraining)

CourseTraining.belongsTo(Training)
CourseTraining.belongsTo(Course)

Course.belongsTo(User)
User.hasMany(Course)

module.exports = {
    Exercise,
    ExerciseType,
    TrainingType,
    User,
    Training,
    TrainingExercise,
    Quote,
    Course,
    CourseTraining
}