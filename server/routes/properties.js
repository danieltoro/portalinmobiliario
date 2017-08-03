module.exports = app => {

  app.get('/properties', (req, res) => {
    res.json({
      response: 'properties API works'
    })
  })

}
