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
                exerciseId:1
            },
            {
                chain: 2,
                trainingId:1,
                exerciseId:2
            },
            {
                chain: 3,
                trainingId:1,
                exerciseId:3
            },
            {
                chain: 4,
                trainingId:1,
                exerciseId:4
            },
            {
                chain: 5,
                trainingId:1,
                exerciseId:5
            },
            {
                chain: 1,
                trainingId:2,
                exerciseId:6
            },
            {
                chain: 2,
                trainingId:2,
                exerciseId:7
            },
            {
                chain: 3,
                trainingId:2,
                exerciseId:8
            },
            {
                chain: 4,
                trainingId:2,
                exerciseId:9
            },
            {
                chain: 5,
                trainingId:2,
                exerciseId:10
            },
            {
                chain: 1,
                trainingId:3,
                exerciseId:11
            },
            {
                chain: 1,
                trainingId:4,
                exerciseId:12
            },
            {
                chain: 2,
                trainingId:4,
                exerciseId:13
            },
            {
                chain: 3,
                trainingId:4,
                exerciseId:14
            },
            {
                chain: 4,
                trainingId:4,
                exerciseId:15
            },
            {
                chain: 1,
                trainingId:5,
                exerciseId:16
            },
            {
                chain: 2,
                trainingId:5,
                exerciseId:17
            },
            {
                chain: 3,
                trainingId:5,
                exerciseId:18
            },
            {
                chain: 4,
                trainingId:5,
                exerciseId:19
            },
            {
                chain: 1,
                trainingId:6,
                exerciseId:20
            },
            {
                chain: 2,
                trainingId:6,
                exerciseId:21
            },
            {
                chain: 3,
                trainingId:6,
                exerciseId:22
            }
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