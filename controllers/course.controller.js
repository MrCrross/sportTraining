const CourseService = require('../services/courses.services')
const TrainingService = require('../services/trainings.services')
const QuoteService = require("../services/quotes.services");

class CourseController {

    async index(req, res) {
        const courses = await CourseService.all()
        const quote = await QuoteService.random()
        return res.render('courses/index', {
            courses,
            quote,
            page:[1]
        })
    }

    async show(req, res) {
        const course = await CourseService.one(req.params.id)
        const quote = await QuoteService.random()
        return res.render('courses/show', {
            course,
            quote,
            page:[1]
        })
    }

    async showDay(req, res) {
        const day = await CourseService.day(req.params.id,req.params.day)
        const quote = await QuoteService.random()
        return res.render('courses/showDay', {
            day,
            quote,
            page:[1]
        })
    }

    async edit(req, res) {
        const course = await CourseService.edit(req.params.id)
        const trainings = await TrainingService.all()
        return res.render('courses/edit', {
            course,
            trainings,
            page:[1,2]
        })
    }

    async create(req, res) {
        const trainings = await TrainingService.all()
        return res.render('courses/create', {
            trainings,
            page:[1,2]
        })
    }

    async store(req, res) {
        const {name, trainings, userId} = req.body
        const course = await CourseService.create({name, trainings, userId})
        return res.json(course)
    }

    async update(req, res) {
        const {id,name, trainings} = req.body
        const course = await CourseService.update({id,name, trainings})
        return res.json(course)
    }

    async delete(req, res) {
        const {id} = req.body
        const data = await CourseService.delete(id)
        return res.json(data)
    }

    async deleteDay(req, res) {
        const {id,day} = req.body
        const data = await CourseService.deleteDay(id,day)
        return res.json(data)
    }
}

module.exports = new CourseController()