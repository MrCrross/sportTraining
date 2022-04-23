const {Quote} = require('../models')
const sequelize = require('../db')

class QuotesServices{

    async all(){
        return await Quote.findAll({
            order: ['author'],
            raw: true
        });
    }

    async create(data){
        const t = await sequelize.transaction()
        try {
            const quote = await Quote.create(data,{transaction: t})
            await t.commit()
            return {
                quote,
                message:"Добавлено успешно"
            };
        }catch (e){
            await t.rollback()
            return {
                error:true,
                message:"Ошибка: "+e
            }
        }
    }

    async update(data){
        const {id,name,author} = data
        const t = await sequelize.transaction()
        try {
            const quote = await Quote.update({
                name,
                author
            },{
                where:{
                    id
                },
                transaction: t
            })
            await t.commit()
            return {
                quote,
                message:"Изменено успешно"
            };
        }catch (e){
            await t.rollback()
            return {
                error:true,
                message:"Ошибка: "+e
            }
        }
    }

    async delete(id){
        const t = await sequelize.transaction()
        try {
            await Quote.destroy({
                where:{
                    id
                }
            },{transaction: t})
            await t.commit()
            return {
                message: "Удалено успешно"
            };
        }catch (e){
            await t.rollback()
            return {
                error:true,
                message:"Ошибка: "+e
            }
        }
    }
}

module.exports = new QuotesServices()