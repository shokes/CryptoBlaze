export default interface StateTypes {
  cryptos: {
    id: string;
    name: string;
    image: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    sparkline_in_7d: { price: [] };
    market_cap_rank: number;
  }[];
  isLoading: boolean;
  loginModal: boolean;
  signUpModal: boolean;
  portfolio: {
    id: string;
    name: string;
    image: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    sparkline_in_7d: { price: [] };
    market_cap_rank: number;
  }[];
}
