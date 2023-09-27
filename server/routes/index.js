const express = require('express');

const router = express.Router();

const pingRoutes = require('./ping');
const healthCheckRoutes = require('./health-check');
const apiSpecRoutes = require('./api-spec');
const coinRoutes = require('./coin');
const authRoutes = require('./auth');
const portfolioRoutes = require('./portfolio');

pingRoutes(router);
healthCheckRoutes(router);
apiSpecRoutes(router);
coinRoutes(router);
authRoutes(router);
portfolioRoutes(router);

module.exports = router;
