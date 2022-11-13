// const baseUrl =
//   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const baseUrl = 'https://api.coingecko.com/api/v3/coins/';

const lastUrl =
  'vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const requests = {
  cryptoList: `${baseUrl}markets?${lastUrl}`,
};

export default requests;
