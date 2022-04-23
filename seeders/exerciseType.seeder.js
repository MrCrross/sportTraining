const {ExerciseType}=require('../models')

class ExerciseTypeSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                name: "Разминка"
            },
            {
                name: "Силовое"
            },
            {
                name: "Кардио"
            },
        ]
    }

    async store(data){
        for (const obj of data) {
            await ExerciseType.create({
                name:obj.name
            })
        }
    }
}

module.exports =new ExerciseTypeSeeder()