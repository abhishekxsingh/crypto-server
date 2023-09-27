const { Coin: CoinService } = require('../services');

const getList = async (req, res) => {
  const { doc } = await CoinService.getList();

  return res.send(doc);
};

const coinSuggesstionsList = async (req, res) => {
  try {
    const { coinSymbol, name } = req.query;
    const data = { coinSymbol, name };
    const { doc } = await CoinService.coinSuggesstionsList(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.serverError();
  }
};

module.exports = { getList, coinSuggesstionsList };
