import express from 'express'
// import mongoose from 'mongoose'

import routes from './routes'

// mongoose.createConnection('mongodb://localhost/portalinmobiliario', () => {
//   console.log('Connected to database');
// })

const app = express()

app.use('/api', routes)



export default app
