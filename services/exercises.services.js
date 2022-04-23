const {Exercise, ExerciseType} = require('../models')
const sequelize = require('../db')

class ExercisesServices {

    async all() {
        return await Exercise.findAll({
            include: [{
                model: ExerciseType,
            }], raw: true
        })
    }

    async create(data) {
        const t = await sequelize.transaction()
        try {
            const exercise = await Exercise.create(data, {transaction: t})
            await t.commit()
            return {
                exercise, message: "Добавлено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true, message: "Ошибка: " + e
            }
        }
    }

    async update(data) {
        const {id,exerciseTypeId} = data
        const t = await sequelize.transaction()
        try {
            await Exercise.update(data, {
                where: {id}, transaction: t
            })
            const exerciseType = await ExerciseType.findByPk(exerciseTypeId)
            await t.commit()
            return {
                exerciseType, message: "Изменено успешно"
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
            await Exercise.destroy({
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

    async allType() {
        return await ExerciseType.findAll({
            raw: true
        })
    }

    async createType(data) {
        const t = await sequelize.transaction()
        try {
            const exerciseType = await ExerciseType.create(data, {transaction: t})
            await t.commit()
            return {
                exerciseType, message: "Добавлено успешно"
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
            await ExerciseType.update(data, {
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

    async deleteType(id){
        const t = await sequelize.transaction()
        try {
            await ExerciseType.destroy({
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

module.exports = new ExercisesServices()