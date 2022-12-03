export default interface PortfolioTypes {
  savedCoin: {
    id: string;
    name: string;
    image: string;
    symbol: string;
    price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    sparkline_in_7d: { price: [] };
    market_cap_rank: number;
  }[];

  removeFromPortfolio: (crypto: {
    id: string;
    name: string;
    symbol: string;
    image: string;
    price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    sparkline_in_7d: {
      price: [];
    };
    market_cap_rank: number;
  }) => Promise<void>;
}
