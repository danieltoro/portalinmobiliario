import mongoose from 'mongoose'

const { Schema } = mongoose


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlenght: [5, 'Username must be 5 characters or more.']
  },
  password: {
    type: String,
    required: true,
    minlenght: [8, 'Password must be 8 characters or more.']
  }
})
// write some encryptation for Password


const User = mongoose.model('User', userSchema)

export default User
