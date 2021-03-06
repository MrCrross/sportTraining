const {Exercise}=require('../models')

class ExerciseSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                name: "Приседания на одной ноге",
                description:"Исходное положение: стоим прямо на одной ноге, другая нога согнута, руки вдоль тела.\n" +
                    "Выполнение: сгибая опорную ногу в колене наклоняемся вперед до того момента пока не коснемся руками лодыжки. После касания возвращаемся в исходное положение. Выполнив максимум на одну ногу, незамедлительно переходит на вторую.",
                duration:15,
                rest:90,
                repetitions:3,
                exerciseTypeId:2
            },
            {
                name: "Круговые приседания",
                description:"Исходное положение: Стоим прямо, руки вдоль тела.\n" +
                    "Выполнение: присев до уровня 90 градусов выпрыгиваем и делаем поворот на 180 градусов в воздухе.",
                duration:15,
                rest:90,
                repetitions:3,
                exerciseTypeId:2
            },
            {
                name: "Приседания с колен",
                description:"Исходное положение: стойка на коленях, руки вдоль тела.\n" +
                    "Выполнение: используя взрывную силу выходим из позиции на коленях в стойку присяда, и поднимаемся вверх до полного выпрямления тела. Опускаемся на колени и снова повторяем упражнение.",
                duration:15,
                rest:90,
                repetitions:3,
                exerciseTypeId:2
            },
            {
                name: "Бицепс бедра",
                description:"Исходное положение: лопатки и плечевой пояс лежат на полу, руки упираются в пол вдоль тела, одна нога согнута под углом 90 градусов и стоит на полу, другая поднята вверх, таз за счет напряженного бицепса бедра на опорной ноге находиться вверху.\n" +
                    "Выполнение: за счет бицепса бедра опускаем таз вниз сгибая ногу в колене, и с силой возвращаем таз на верх, в исходное положение.",
                duration:15,
                rest:90,
                repetitions:3,
                exerciseTypeId:2
            },
            {
                name: "Взрывные подъемы",
                description:"Исходное позиция: стоим ровно.\n" +
                    "Выполнение: немного отклонившись на пятки, переносим вес и поднимаем на носках взрывным движением, задерживаем на одну секунду, возвращаемся в исходное положение на пятки и повторяем движение заданное количество раз.",
                duration:30,
                rest:90,
                repetitions:4,
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
                name: "Армейские отжимания. Уровень 1",
                description:"Исходное позиция: Таз вверху, ноги на носках, тело напоминает широкую букву Л.\n" +
                    "Выполнение: Сгибаем руки в локтях слегка подавая голову вперед, при этом позиция тела остается неизменной, все движение происходит в локтях. Возвращаемся в исходную позицию.",
                duration:15,
                rest:90,
                repetitions:3,
                exerciseTypeId:2
            },
            {
                name: "Касания плеч. Медленные",
                description:"Исходное положение: упор лежа на полу, руки стоят чуть шире или на ширине плеч, ноги стоят по возможности максимально узко.\n" +
                    "Выполнение: перенося вес на левую руку, подносим правую руку к параллельному плечу и задерживаем на 1-2 секунды. Возвращаемся в исходную позицию, повторяя движение левой рукой.",
                duration:3,
                rest:90,
                repetitions:15,
                exerciseTypeId:2
            },
            {
                name: "Разгибания от стены",
                description:"Исходное позиция: облокотиться на стену ладонями.\n" +
                    "Выполнение: из исходного положения, медленно и подконтрольно опускаемся на предплечья (предплечья параллельны друг другу и стоят строго вертикально), после чего снова разгибаем руку задействуя трицепс. Чем ниже положение ладоней на стене, тем сложнее упражнение.",
                duration:3,
                rest:90,
                repetitions:15,
                exerciseTypeId:2
            },
            {
                name: "Восстановление",
                description:"Восстановление",
                duration:1,
                rest:1,
                repetitions:1,
                exerciseTypeId:4
            },
            {
                name: "Слайд на спину",
                description:"Исходное позиция: сидя на ногах, руки выставлены вперед и расставлены чуть шире плеч упираясь ладонями в пол, грудь прижата к коленям.\n" +
                    "Выполнение: Данное упражнения является аналогом пуловера, но без дополнительного веса. Напрягая широчайшие мышцы спины подтягиваем себя вперед, при это руки не сгибаем в локтях, в пиковой точке движения сокращаем усилием спину, и возвращаемся в исходное положение.",
                duration:4,
                rest:90,
                repetitions:15,
                exerciseTypeId:2
            },
            {
                name: "Обратные отжимания",
                description:"Исходное положение: лежим на спине, локти под углом 45 градусов упираются в пол.\n" +
                    "Выполнение: поднимаем торс за счет отведения локтей назад, сводим лопатки, сокращаем спину в пиковой точке на 1-2 секунды и возвращаемся в исходное положение.\n" +
                    "Для более сложного варианта можно оторвать ноги от земли.",
                duration:4,
                rest:90,
                repetitions:15,
                exerciseTypeId:2
            },
            {
                name: "Полет супермена",
                description:"Исходное положение: лежим животом на полу, ноги вместе. руки выставлены вперед, голова смотрит вниз.\n" +
                    "Выполнение: за счет мышц спины, ягодиц и бицепса бедра, поднимаем руки и ноги максимально, делая задержку на 1-2 секунды и опускаем в исходное положение.",
                duration:3,
                rest:90,
                repetitions:15,
                exerciseTypeId:2
            },
            {
                name: "Бицепс с полотенцем",
                description:"Исходное позиция: облокотившись на стену берем полотенце двумя руками и упираемся в него ногой по середине.\n" +
                    "Выполнение: Сгибаем руки в локтях напрягая бицепсы и создавая сопротивление ногой. Разгибаем медленно руки вниз сопротивляясь движению. Представляем что работаем со штангой.",
                duration:3,
                rest:90,
                repetitions:15,
                exerciseTypeId:2
            },
            {
                name: "Берпи бокс",
                description:"Исходное положение: стоим прямо, руки вдоль тела.\n" +
                    "Выполнение: в энергичном темпе принимаем положение упора лежа, выполняем отжимание и возвращаемся в стойку с руками перед лицом.",
                duration:40,
                rest:20,
                repetitions:1,
                exerciseTypeId:3
            },
            {
                name: "Высокие колени",
                description:"Исходное положение: стоим прямо, руки вдоль тела.\n" +
                    "Выполнение: энергично поднимаем колено на уровень 90 градусов и касаемся колена рукой. Опуская правое колено, начинаем движение левым, выполняем данные движение отведенное количество времени.",
                duration:40,
                rest:20,
                repetitions:1,
                exerciseTypeId:3
            },
            {
                name: "X-Прыжки",
                description:"Исходное положение: Стоим прямо, руки вдоль тела.\n" +
                    "Выполнение: одновременно с прыжком расставляем ноги шире плеч, и сводим руки над головой. Следующим прыжком возвращаемся в начальную позицию.",
                duration:40,
                rest:20,
                repetitions:1,
                exerciseTypeId:3
            },
            {
                name: "Альпинист",
                description:"Исходное положение: упор лежа, одна нога стоит возле ладони.\n" +
                    "Выполнение: переставляем ноги поочередно к рукам как показано на видео.",
                duration:40,
                rest:20,
                repetitions:1,
                exerciseTypeId:3
            },
            {
                name: "Из стороны в сторону",
                description:"Исходное положение: упор лежа на полу, руки стоят шире плеч.\n" +
                    "Выполнение: После взрывного отжимания переносим тело в сторону, пытаясь поставить левую ладонь на место правой, выполняем упражнение прыжками из стороны в сторону заданное количество раз.",
                duration:1,
                rest:30,
                repetitions:100,
                exerciseTypeId:5
            },
            {
                name: "T-Отжимания",
                description:"Исходное позиция: упор лежа на полу.\n" +
                    "Выполнение: Сделав отжимание переносим вес на правую руку и поднимаем левую вверх образовывая букву Т. Удерживаем эту позицию несколько секунд и опускаемся в исходное положение, повторяя движение на противоположную руку.",
                duration:1,
                rest:30,
                repetitions:50,
                exerciseTypeId:2
            },
            {
                name: "Слайд на спин",
                description:"Исходное позиция: сидя на ногах, руки выставлены вперед и расставлены чуть шире плеч упираясь ладонями в пол, грудь прижата к коленям.\n" +
                    "Выполнение: Данное упражнения является аналогом пуловера, но без дополнительного веса. Напрягая широчайшие мышцы спины подтягиваем себя вперед, при это руки не сгибаем в локтях, в пиковой точке движения сокращаем усилием спину, и возвращаемся в исходное положение.",
                duration:1,
                rest:30,
                repetitions:50,
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