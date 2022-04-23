const {Course}=require('../models')

class CourseSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                name: "ВОИН СПАРТЫ",
                userId: 1
            },
        ]
    }

    async store(data){
        for (const obj of data) {
            await Course.create({
                name:obj.name,
                userId:obj.userId,
            })
        }
    }
}

module.exports =new CourseSeeder()