const {Exercise}=require('../models')

class ExerciseSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                name: "Отжимания 4х1",
                description:"Исходное положение: упор лежа на полу, руки чуть шире плеч.\n" +
                    "Выполнение: Выполняем обычные отжимания, где движение вниз занимает 4 секунды, а движение вверх идет максимально взрывным.",
                duration:5,
                rest:90,
                repetitions:15,
                exerciseTypeId:2
            },
            {
                name: "Падения плеча",
                description:"Исходное положение: упор лежа на полу, руки чуть шире плеч.\n" +
                    "Выполнение: перенося вес тела на правую руку опускаемся вниз при этом левое плечо пытаем держать как можно выше. возвращаемся в исходное положение и выполняем тоже движение опускаясь на левую руку, держа правое плечо как можно выше.",
                duration:5,
                rest:90,
                repetitions:15,
                exerciseTypeId:2
            },
        ]
    }

    async store(data){
        for (const obj of data) {
            await Exercise.create({
                name:obj.name,
                description:obj.description,
                duration:obj.duration,
                rest:obj.rest,
                repetitions:obj.repetitions,
                exerciseTypeId:obj.exerciseTypeId,
            })
        }
    }
}

module.exports =new ExerciseSeeder()