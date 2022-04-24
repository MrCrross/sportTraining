const {User} = require('../models')
const sequelize = require('../db')
const crypto = require("crypto-js");


class UsersServices {

    async all() {
        return await User.findAll({
            order: ['name'],
        });
    }

    async one(id) {
        return await User.findByPk(id);
    }

    async create(data) {
        const t = await sequelize.transaction()
        try {
            const {first_name, last_name, name, password, role} = data
            const candidate = await User.findOne({where: {name}})
            if (candidate) {
                return {
                    error: true,
                    message: 'Пользователь с таким логином уже существует'
                }
            }
            const hashPassword = crypto.SHA256(password).toString()
            const user = await User.create({first_name, last_name, name, password: hashPassword, role}, {
                transaction: t
            })
            await t.commit()
            return {
                user,
                message: "Добавлено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true,
                message: "Ошибка: " + e
            }
        }
    }

    async update(data) {
        const t = await sequelize.transaction()
        try {
            const {id, first_name, last_name, name, role} = data
            const last = await User.findOne({where: {id}})
            const candidate = await User.findOne({where: {name}})
            if (candidate && candidate.dataValues.id !== last.dataValues.id) {
                return {
                    error: true,
                    message: 'Пользователь с таким логином уже существует'
                }
            }
            await User.update({first_name, last_name, name, role}, {
                where: {
                    id
                },
                transaction: t
            })
            await t.commit()
            const user = await User.findOne({
                where: {id},
                raw: true,
            })
            return {
                user,
                message: "Изменено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true,
                message: "Ошибка: " + e
            }
        }
    }

    async updatePassword(data) {
        const t = await sequelize.transaction()
        try {
            const {id, password} = data
            const hashPassword = crypto.SHA256(password).toString()
            await User.update({password: hashPassword}, {
                where: {
                    id
                },
                transaction: t
            })
            await t.commit()
            return {
                message: "Изменено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true,
                message: "Ошибка: " + e
            }
        }
    }

    async delete(id) {
        const t = await sequelize.transaction()
        try {
            await User.destroy({
                where: {
                    id
                },
                transaction: t
            })
            await t.commit()
            return {
                message: "Удалено успешно"
            };
        } catch (e) {
            await t.rollback()
            return {
                error: true,
                message: "Ошибка: " + e
            }
        }
    }
}

module.exports = new UsersServices()