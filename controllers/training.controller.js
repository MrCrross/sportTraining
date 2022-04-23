const TrainingServices = require('../services/trainings.services')
const ExerciseServices = require('../services/exercises.services')

class TrainingController {

    async index(req, res) {
        const trainings = await TrainingServices.all()
        return res.render('trainings/index', {
            trainings,
            page:[1,2]
        })
    }

    async types(req, res) {
        const types = await TrainingServices.allType()
        return res.render('trainings/types', {
            types,
            page:[1]
        })
    }

    async edit(req, res) {
        const id = req.params.id
        const training = await TrainingServices.one(id)
        const exercises = await ExerciseServices.all()
        const trainingTypes = await TrainingServices.allType()

        return res.render('trainings/edit', {
            training, exercises,
            trainingTypes,
            page:[1]
        })
    }

    async create(req, res) {
        const exercises = await ExerciseServices.all()
        const trainingTypes = await TrainingServices.allType()
        return res.render('trainings/create', {
            exercises,
            trainingTypes,
            page:[1,2]
        })
    }

    async store(req, res) {
        const {name, trainingTypeId, exercises, userId} = req.body
        const training = await TrainingServices.create({name, trainingTypeId, exercises, userId})
        return res.json(training)
    }

    async storeType(req, res) {
        const {name} = req.body
        const training = await TrainingServices.createType({name})
        return res.json(training)
    }

    async update(req, res) {
        const {id, name, trainingTypeId, exercises} = req.body
        const data = await TrainingServices.update({id, name, trainingTypeId, exercises})
        return res.json(data)
    }

    async updateType(req, res) {
        const {id, name} = req.body
        const data = await TrainingServices.updateType({id, name})
        return res.json(data)
    }

    async delete(req, res) {
        const {id} = req.body
        const data = await TrainingServices.delete(id)
        return res.json(data)
    }

    async deleteType(req, res) {
        const {id} = req.body
        const data = await TrainingServices.deleteType(id)
        return res.json(data)
    }
}

module.exports = new TrainingController()