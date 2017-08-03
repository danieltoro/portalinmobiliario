'use strict';

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.json({
      response: 'API works'
    });
  });
};
//# sourceMappingURL=index.js.map