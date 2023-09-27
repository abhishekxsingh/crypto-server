const { HealthCheck } = require('../services');
const { VERSION, NAME } = require('../config');

/**
 * Check microservice healtcheck
 * @return {objectregistration} status - returns dependent service status.
 * */
const status = async (req, res) => {
  const response = await HealthCheck.status([ ]);

  return res.getRequest({
    dependsOn: response,
    version: `${VERSION}`,
    name: `${NAME}`,
  });
};

module.exports = { status };
