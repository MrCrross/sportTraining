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
            {
                courseId: 1,
                day:2,
                trainingId:2
            },
            {
                courseId: 1,
                day:3,
                trainingId:3
            },
            {
                courseId: 1,
                day:4,
                trainingId:4
            },
            {
                courseId: 1,
                day:5,
                trainingId:5
            },
            {
                courseId: 1,
                day:6,
                trainingId:6
            },
            {
                courseId: 1,
                day:7,
                trainingId:4
            },
            {
                courseId: 1,
                day:8,
                trainingId:1
            },
            {
                courseId: 1,
                day:9,
                trainingId:2
            },
            {
                courseId: 1,
                day:10,
                trainingId:3
            },
            {
                courseId: 1,
                day:11,
                trainingId:4
            },
            {
                courseId: 1,
                day:12,
                trainingId:5
            },
            {
                courseId: 1,
                day:13,
                trainingId:6
            },
            {
                courseId: 1,
                day:14,
                trainingId:4
            },
            {
                courseId: 1,
                day:15,
                trainingId:1
            },
            {
                courseId: 1,
                day:16,
                trainingId:2
            },
            {
                courseId: 1,
                day:17,
                trainingId:3
            },
            {
                courseId: 1,
                day:18,
                trainingId:4
            },
            {
                courseId: 1,
                day:19,
                trainingId:5
            },
            {
                courseId: 1,
                day:20,
                trainingId:6
            },
            {
                courseId: 1,
                day:21,
                trainingId:4
            },
            {
                courseId: 1,
                day:22,
                trainingId:1
            },
            {
                courseId: 1,
                day:23,
                trainingId:2
            },
            {
                courseId: 1,
                day:24,
                trainingId:3
            },
            {
                courseId: 1,
                day:25,
                trainingId:4
            },
            {
                courseId: 1,
                day:26,
                trainingId:5
            },
            {
                courseId: 1,
                day:27,
                trainingId:6
            },
            {
                courseId: 1,
                day:28,
                trainingId:4
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