export default interface CryptoTypes {
  id: number;
  name: string;
  symbol: string;
  image: {
    large: string;
  };
  description: { en: string };

  market_data: {
    sparkline_7d: {
      price: [];
    };

    market_cap: {
      usd: number;
    };

    high_24h: { usd: number };
    low_24h: { usd: number };
    market_cap_rank: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_1y: number;
    price_change_percentage_14d: number;

    total_volume: {
      usd: number;
    };
  };

  links: {
    subreddit_url: string;
    chat_url: string;
    homepage: string;
  };
  hashing_algorithm: number;
  liquidity_score: number;
}
