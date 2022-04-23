const {TrainingExercise}=require('../models')

class TrainingExerciseSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                chain: 1,
                trainingId:1,
                exerciseId:2
            },
            {
                chain: 2,
                trainingId:1,
                exerciseId:1
            },
        ]
    }

    async store(data){
        for (const obj of data) {
            await TrainingExercise.create({
                chain:obj.chain,
                trainingId:obj.trainingId,
                exerciseId:obj.exerciseId,
            })
        }
    }
}

module.exports =new TrainingExerciseSeeder()