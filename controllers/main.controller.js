const CoursesServices = require('../services/courses.services')
const QuoteService = require('../services/quotes.services')

class MainController{


    async index(req, res){
        const courses = await CoursesServices.all()
        const quote = await QuoteService.random()
        return res.render('main', {
            courses,
            quote,
            page: [1,2,3]
        })
    }

    async calc(req,res){
        const quote = await QuoteService.random()
        return res.render('calc',{
            quote,
            page:[3]
        })
    }

}

module.exports = new MainController()