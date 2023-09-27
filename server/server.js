const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const SmartHttp = require('smart-http');
const correlationId = require('correlationid-middleware');

const routes = require('./routes');

const { PORT } = require('./config');

const app = express();

/**
 * Start the app by listening <port>
 * */
const server = app.listen(PORT);

/**
 * List of all middlewares used in project cors, compression, helmet
 * */
try {
  // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  app.enable('trust proxy');
  app.use(correlationId, SmartHttp());
  app.use(cors({
    exposedHeaders: [ 'message', 'x-coreplatform-paging-limit', 'x-coreplatform-total-records' ],
  }));
  app.use(compression());
  app.use(helmet());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(express.json());

  app.use('/', routes);
  app.all('/*', (_req, res) => res.notFound());
} catch (e) {
  server.close();
}

module.exports = server;
