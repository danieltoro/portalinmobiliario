import mongoose from 'mongoose'

const {Schema} = mongoose

mongoose.Promise = global.Promise

const propertySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['venta', 'arriendo']
  },
  type: {
    type: String,
    enum: [
      'Departamento',
      'Terreno',
      'Agricola',
      'Casa',
      'Industrial',
      'Bodega',
      'Oficina',
      'Estacionamiento',
      'Local',
      'Bungalow',
      'Hotel',
      'Sitio',
      'Comercial',
      'Parcela',
      'Loteo'
    ]
  },
  price: { type: Number, required: true },
  size: Number,
  text: String,
  isDeleted: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  // _creator: { type: Schema.ObjectId, ref: 'User' },
  // _comments: [ { type: Schema.ObjectId, ref: 'Comment' } ]
})

const Property = mongoose.model('Property', propertySchema)

export default Property
