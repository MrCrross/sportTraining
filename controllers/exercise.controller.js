const ExerciseServices = require('../services/exercises.services')

class ExerciseController {

    async index(req, res) {
        const exercises = await ExerciseServices.all()
        const types = await ExerciseServices.allType()
        return res.render('exercises/index',{
            exercises,
            types,
            page:[1]
        })
    }

    async types(req, res) {
        const types = await ExerciseServices.allType()
        return res.render('exercises/types',{
            types,
            page:[1]
        })
    }

    async create(req, res) {
        const types = await ExerciseServices.allType()
        return res.render('exercises/create', {
            types,
            page:[1,2]
        })
    }

    async store(req, res) {
        const {name, exerciseTypeId, description, duration, rest, repetitions} = req.body
        const exercise = await ExerciseServices.create({
            name,
            exerciseTypeId,
            description,
            duration,
            rest,
            repetitions
        })
        return res.json(exercise)
    }

    async storeType(req, res) {
        const {name} = req.body
        const exerciseType = await ExerciseServices.createType({name})
        return res.json(exerciseType)
    }

    async update(req, res) {
        const {id, name,exerciseTypeId, description, duration, rest, repetitions} = req.body
        const exercise = await ExerciseServices.update({id, name,exerciseTypeId, description, duration, rest, repetitions})
        return res.json(exercise)
    }

    async updateType(req, res) {
        const {id, name} = req.body
        const data = await ExerciseServices.updateType({id, name})
        return res.json(data)
    }

    async delete(req, res) {
        const {id} = req.body
        const data = await ExerciseServices.delete(id)
        return res.json(data)
    }

    async deleteType(req, res) {
        const {id} = req.body
        const data = await ExerciseServices.deleteType(id)
        return res.json(data)
    }
}

module.exports = new ExerciseController()