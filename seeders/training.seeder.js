const {Training}=require('../models')

class TrainingSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                name: "НОГИ",
                trainingTypeId:3,
                userId:1
            },
            {
                name: "PUSH",
                trainingTypeId:3,
                userId:1
            },
            {
                name: "Восстановление",
                trainingTypeId:4,
                userId:1
            },
            {
                name: "PULL",
                trainingTypeId:3,
                userId:1
            },
            {
                name: "Кардио",
                trainingTypeId:2,
                userId:1
            },
            {
                name: "Сражение",
                trainingTypeId:3,
                userId:1
            },
        ]
    }

    async store(data){
        for (const obj of data) {
            await Training.create({
                name:obj.name,
                trainingTypeId:obj.trainingTypeId,
                userId:obj.userId,
            })
        }
    }
}

module.exports =new TrainingSeeder()