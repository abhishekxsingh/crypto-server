/* eslint-disable consistent-return */
/* eslint-disable no-console */
const axios = require('axios');
const {
  coins: CoinSuggestion, Sequelize: { Op },
} = require('../database');
const Helper = require('../utils/helper');

const getList = async () => {
  try {
    const { data: result } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    // const { data } = await axios.get(
    //   'https://rest.coinapi.io/v1/assets',
    //   {
    //     headers:
    //     { 'X-CoinAPI-Key': '8CDA6100-376D-4BB8-ADCF-6EC6E9F705C7' },
    //   },
    // );

    if (result.length) {
      return { doc: result };
    }

    return { erors: [ { name: 'key-name', messages: 'something went wrong' } ] };
  } catch (err) {
    console.log(err);
  }
};

const coinSuggesstionsList = async (payload) => {
  const { coinSymbol, name } = payload;
  let where = {};

  if (coinSymbol) {
    where = { symbol: { [Op.iLike]: `%${coinSymbol}%` } };
  }

  if (name) {
    where = { name: { [Op.iLike]: `%${name}%` } };
  }

  const response = await CoinSuggestion.findAll({
    attributes: [ 'symbol', 'name' ],
    where,
  });

  if (response) {
    const data = response.map((i) => {
      const { dataValues } = i;
      const doc = Helper.convertCamelObjectToSnake(dataValues);

      return doc;
    });

    return { doc: data };
  }

  return { doc: [] };
};

module.exports = {
  getList,
  coinSuggesstionsList,
};
