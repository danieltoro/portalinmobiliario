import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlenght: [5, 'Username must be 5 characters or more.'],
  },
  password: {
    type: String,
    required: true,
    minlenght: [8, 'Password must be 8 characters or more.'],
  }
})
// write some encryption for Password


const User = mongoose.model('User', userSchema)

export default User
