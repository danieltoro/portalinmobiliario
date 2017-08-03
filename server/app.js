import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import routes from './routes'

mongoose.createConnection('mongodb://localhost/portalinmobiliario', () => {
  console.log('Connected to database');
})


const app = express()

// Middlewares
app.use(bodyParser.json())
app.use('/api', routes)



export default app
