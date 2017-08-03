'use strict';

module.exports = function (app) {

  app.get('/properties', function (req, res) {
    res.json({
      response: 'properties API works'
    });
  });
};
//# sourceMappingURL=properties.js.map