import mongoose from 'mongoose'
import app from './app'

mongoose.createConnection(process.env.DATABASE, (err, res) => {

  if (err) {
    return console.log(`Error to connect to database. Error: ${err}`);
  }

  console.log('Connected to database');
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  })





})
