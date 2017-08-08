import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import routes from './routes'

mongoose.connect(process.env.DATABASE,  { useMongoClient: true })
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch(err => console.log(err))


const app = express()

// Middlewares
app.use(express.static(__dirname + '/../client/public'))

app.use(bodyParser.json())
app.use('/api', routes)



export default app
