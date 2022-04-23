const {Training, TrainingType, Exercise, ExerciseType, TrainingExercise, User} = require('../models')
const sequelize = require('../db')

class TrainingsServices {

    async all() {
        return await Training.findAll({
            include: [
                {
                model: TrainingType,
            },
                {
                model: TrainingExercise, include: [{model: Exercise, include: [ExerciseType]}],
            },
                {
                model: User
            }],
            order: [[TrainingExercise, 'chain', 'asc'], 'name']
        })
    }

    async allType() {
        return await TrainingType.findAll({
            order: ['name'], raw: true
        })
    }

    async one(id) {
        return await Training.findOne({
            include: [
                {
                    model: TrainingType,
                },
                {
                    model: TrainingExercise
                }],
            where:{
                id
            },
            order: [[TrainingExercise, 'chain', 'asc'], 'name']
        })
    }

    async create(data) {
        const {name, trainingTypeId, exercises, userId} = data
        const t = await sequelize.transaction()
        try {
            const training = await Training.create({
                name, trainingTypeId, userId
            }, {transaction: t})

            let chain = 0;
            for (const exerciseId of exercises) {
                chain++;
                await TrainingExercise.create({
                    trainingId: training.id, exerciseId, chain
                }, {transaction: t})
            }
            await t.commit()
            return {
                training, message: "Добавлено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true, message: "Ошибка: " + e
            }
        }
    }

    async update(data) {
        const {id, name, trainingTypeId, exercises} = data
        const t = await sequelize.transaction()
        try {
            await Training.update({
                name, trainingTypeId
            }, {
                where: {id}, transaction: t
            })

            await TrainingExercise.destroy({
                where: {
                    trainingId: id
                }, transaction: t
            })

            let chain = 0;
            for (const exerciseId of exercises) {
                chain++;
                await TrainingExercise.create({
                    trainingId: id, exerciseId, chain
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
            await TrainingExercise.destroy({
                where: {
                    trainingId: id
                }
            })
            await Training.destroy({
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

    async createType(data) {
        const t = await sequelize.transaction()
        try {
            const trainingType = await TrainingType.create(data, {transaction: t})
            await t.commit()
            return {
                trainingType, message: "Добавлено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true, message: "Ошибка: " + e
            }
        }
    }

    async updateType(data) {
        const {id} = data
        const t = await sequelize.transaction()
        try {
            await TrainingType.update(data, {
                where: {id}, transaction: t
            })
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

    async deleteType(id) {
        const t = await sequelize.transaction()
        try {
            await TrainingType.destroy({
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
}

module.exports = new TrainingsServices()