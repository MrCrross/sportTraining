const CoursesServices = require('../services/courses.services')

class MainController{


    async index(req, res){
        const courses = await CoursesServices.all()
        return res.render('main', {
            courses,
            page: [1,2,3]
        })
    }

    async calc(req,res){
        return res.render('calc',{
            page:[3]
        })
    }

}

module.exports = new MainController()