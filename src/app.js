require('dotenv').config()
const express = require('express')
const cors = require('cors')

class AppController{
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.app.set('json spaces', 4) //DELETE AFTER
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(cors())
    }
    routes(){
        this.app.use(require('./routes'))
    }
}


module.exports = new AppController().app