const {TrainingType}=require('../models')

class TrainingTypeSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                name: "Интенсивная"
            },
            {
                name: "Кардио"
            },
            {
                name: "Силовая"
            },
        ]
    }

    async store(data){
        for (const obj of data) {
            await TrainingType.create({
                name:obj.name
            })
        }
    }
}

module.exports =new TrainingTypeSeeder()