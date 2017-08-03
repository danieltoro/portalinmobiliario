'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _consign = require('consign');

var _consign2 = _interopRequireDefault(_consign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

(0, _consign2.default)().include('server/libs/middlewares.js').then('server/routes').include('server/libs/boot.js').into(app);
//# sourceMappingURL=index.js.map