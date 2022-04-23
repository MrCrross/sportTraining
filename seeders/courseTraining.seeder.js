const {CourseTraining}=require('../models')

class CourseTrainingSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                courseId: 1,
                day:1,
                trainingId:1
            },
        ]
    }

    async store(data){
        for (const obj of data) {
            await CourseTraining.create({
                courseId:obj.courseId,
                day:obj.day,
                trainingId:obj.trainingId,
            })
        }
    }
}

module.exports =new CourseTrainingSeeder()