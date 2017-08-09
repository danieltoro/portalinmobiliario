import db from './../models'

const propertyController = {}

propertyController.post = (req, res) => {
  const {
    title,
    status,
    type,
    price,
    size,
    text
  } = req.body

  // Validation

  const property = new db.Property({
    title,
    status,
    type,
    price,
    size,
    text
  })

  property.save().then((newProperty) => {
    res.status(200).json({
      success:  true,
      data: newProperty,
    })
  })
  .catch((err) => {
    res.status(500).json({
      message: err,
    })
  })
}

propertyController.getAll = (req, res) => {
  db.Property.find({}).populate([{
    path: '_creator',
    select: 'username createdAt -_id'
  }]).populate({
    path: '_comments',
    select: 'text createdAt _creator',
    match: { 'isDeleted': false }
  })
  .then((property) => {
    return res.status(200).json({
      success: true,
      data: property
    })
  })
  .catch((err) => {
    res.status(500).json({
      message: err,
    })
  })
}

export default propertyController
