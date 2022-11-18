const baseUrl = 'https://api.coingecko.com/api/v3/';

const lastUrl =
  'vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';

const requests = {
  cryptoList: `${baseUrl}coins/markets?${lastUrl}`,
  trending: `${baseUrl}search/trending?/${lastUrl}`,
  nftList: `${baseUrl}nfts/list`,
  // singleCoin: `${baseUrl}`
};

export default requests;
