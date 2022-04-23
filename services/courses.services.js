const {
    Training,
    TrainingType,
    Exercise,
    ExerciseType,
    TrainingExercise,
    User,
    Course,
    CourseTraining
} = require('../models')
const sequelize = require('../db')

class CoursesServices {

    async all() {
        return await Course.findAll({
            include: [
                {
                    model: CourseTraining,
                    include: [
                        {
                            model: Training,
                            include: [
                                {
                                    model: TrainingType
                                },
                            ],
                        }
                    ],
                },
                {
                    model: User
                }
            ],
            order: [[CourseTraining, 'day', 'asc'], 'name']
        })
    }

    async one(id) {
        return await Course.findOne({
            where: {
                id
            },
            include: [
                {
                    model: CourseTraining,
                    include: [
                        {
                            model: Training,
                            order: [[TrainingExercise, 'chain', 'asc']],
                            include: [
                                {
                                    model: TrainingType,
                                },
                                {
                                    model: TrainingExercise,
                                    include: [
                                        {
                                            model: Exercise,
                                        }
                                    ],
                                },
                                {
                                    model: User,
                                }
                            ],
                        }
                    ],
                },
                {
                    model: User,
                }
            ],
            order: [[CourseTraining, 'day', 'asc'], 'name'],
        })
    }

    async day(courseId, day) {
        return await CourseTraining.findOne({
            where: {
                courseId,
                day
            },
            include: [
                {
                    model: Training,
                    order: [[TrainingExercise, 'chain', 'asc']],
                    include: [
                        {
                            model: TrainingType,
                        },
                        {
                            model: TrainingExercise,
                            include: [
                                {
                                    model: Exercise,
                                    include:[
                                        {
                                            model:ExerciseType
                                        }
                                    ]
                                }
                            ],
                        },
                        {
                            model: User,
                        }
                    ],
                }
            ],
        })
    }

    async edit(id){
        return await Course.findOne({
            where: {
                id
            },
            include: [
                {
                    model: CourseTraining,
                    include: [
                        {
                            model: Training,
                        }
                    ],
                },
            ],
            order: [[CourseTraining, 'day', 'asc'], 'name'],
        })
    }

    async create(data) {
        const {name, trainings, userId} = data
        const t = await sequelize.transaction()
        try {
            const course = await Course.create({
                name, userId
            }, {transaction: t})

            let day = 0;
            for (const trainingId of trainings) {
                day++;
                await CourseTraining.create({
                    courseId: course.id, trainingId, day
                }, {transaction: t})
            }
            await t.commit()
            return {
                course, message: "Добавлено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true, message: "Ошибка: " + e
            }
        }
    }

    async update(data) {
        const {id, name, trainings} = data
        const t = await sequelize.transaction()
        try {
            await Course.update({
                name
            }, {
                where: {id}, transaction: t
            })

            await CourseTraining.destroy({
                where: {
                    courseId: id
                }, transaction: t
            })

            let day = 0;
            for (const trainingId of trainings) {
                day++;
                await CourseTraining.create({
                    courseId: id, trainingId, day
                }, {transaction: t})
            }

            await t.commit()
            return {
                message: "Изменено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true, message: "Ошибка: " + e
            }
        }
    }

    async delete(id) {
        const t = await sequelize.transaction()
        try {
            await CourseTraining.destroy({
                where: {
                    courseId: id
                }
            })
            await Course.destroy({
                where: {
                    id
                }
            }, {transaction: t})
            await t.commit()
            return {
                message: "Удалено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true, message: "Ошибка: " + e
            }
        }
    }

    async deleteDay(id, day) {
        const t = await sequelize.transaction()
        try {
            await CourseTraining.destroy({
                where: {
                    courseId: id,
                    day: day
                }
            })
            await t.commit()
            return {
                message: "Удалено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true, message: "Ошибка: " + e
            }
        }
    }

}

module.exports = new CoursesServices()