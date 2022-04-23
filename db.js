const {Sequelize} = require("sequelize");
const logging = (process.env.DB_LOGGING ==='true')
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DRIVER,
        logging,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)