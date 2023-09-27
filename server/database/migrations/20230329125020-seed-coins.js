const coins = require('../seed/coins');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('coins', coins, {}),
  down: (queryInterface) => queryInterface.truncate('coins', {}),
};
