// const baseUrl = 'https://api.coingecko.com/api/v3/';

// const lastUrl =
//   'vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';

const requests = {
  cryptoList: `${process.env.BASE_URL}coins/markets?${process.env.LAST_URL}`,
  trending: `${process.env.BASE_URL}search/trending?/${process.env.BASE_URL}`,
  nftList: `${process.env.BASE_URL}nfts/list`,
};

export default requests;
