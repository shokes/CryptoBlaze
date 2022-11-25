export default interface TrendingCoinsTypes {
  cryptos: {
    item: {
      name: string;
      slug: string;
      price_btc: number;
      large: string;
      symbol: string;
      id: string;
    };
  }[];

  loading: boolean;
}
