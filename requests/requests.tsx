const requests = {
  cryptoList: `${process.env.BASE_URL}coins/markets?${process.env.LAST_URL}`,
  trending: `${process.env.BASE_URL}search/trending?/${process.env.BASE_URL}`,
  nftList: `${process.env.BASE_URL}nfts/list`,
};

export default requests;
