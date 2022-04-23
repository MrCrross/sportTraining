const {User}=require('../models')
const crypto = require("crypto-js");

class UserSeeder{

    async _init() {
        const data = this.data()
        await this.store(data)
    }

    data(){
        return [
            {
                last_name:"root",
                first_name:"root",
                name:"root",
                password: crypto.SHA256("qweqwe123").toString(),
                role: 1
            },
            {
                last_name:"Иванов",
                first_name:"Иван",
                name:"trainer",
                password: crypto.SHA256("qweqwe123").toString(),
                role: 2
            },
        ]
    }

    async store(data){
        for (const obj of data) {
            await User.create({
                last_name:obj.last_name,
                first_name:obj.first_name,
                password:obj.password,
                role:obj.role,
                name:obj.name
            })
        }
    }
}

module.exports =new UserSeeder()