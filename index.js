require('dotenv').config()
const express = require('express')
const expHbs = require('express-handlebars')
const cors = require('cors')
const path = require('path')
const sequelize = require('./db')
const router = require('./routes')

const PORT = process.env.APP_PORT || 5000
const app = express()

require('./models')
app.engine('hbs',
    expHbs.engine({
        layoutsDir: 'views/layouts',
        partialsDir: 'views/partials',
        defaultLayout: 'app',
        extname: 'hbs',
        helpers: require('handlebars-helpers')()
    }))
app.set('view engine', 'hbs')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use('/flowbite', express.static(path.resolve(__dirname, 'node_modules/flowbite/dist')))
app.use('/', router)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        if(process.env.APP_TEMPLATE==="true"){
            require('./seeders')
        }
        app.listen(PORT, () => console.log(`Server run on port http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()