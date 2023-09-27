/* eslint-disable max-len */
const { v1: uuidv1 } = require('uuid');

let coins = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'btc',
  },
  {
    id: 2,
    symbol: 'eth',
    name: 'Ethereum',
  },
  {
    id: 3,
    symbol: 'usdt',
    name: 'Tether',
  },
  {
    id: 4,
    symbol: 'bnb',
    name: 'BNB',
  },
  {
    id: 5,
    symbol: 'usdc',
    name: 'USD Coin',
  },
  {
    id: 6,
    symbol: 'xrp',
    name: 'XRP',
  },
  {
    id: 7,
    symbol: 'ada',
    name: 'Cardano',
  },
  {
    id: 8,
    symbol: 'steth',
    name: 'Lido Staked Ether',
  },
  {
    id: 9,
    symbol: 'doge',
    name: 'Dogecoin',
  },
  {
    id: 10,
    symbol: 'matic',
    name: 'Polygon',
  },
  {
    id: 11,
    symbol: 'sol',
    name: 'Solana',
  },
  {
    id: 12,
    symbol: 'busd',
    name: 'Binance USD',
  },
];

coins = coins.map((i) => ({
  ...i,
  public_id: uuidv1(),
  created_at: new Date(),
  updated_at: new Date(),
}));

module.exports = coins;
