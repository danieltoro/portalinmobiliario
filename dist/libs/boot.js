'use strict';

module.exports = function (app) {
  app.listen(app.get('port'), function () {
    console.log('Server is running on http://localhost:' + app.get('port'));
  });
};
//# sourceMappingURL=boot.js.map