export default interface CoinsTypes {
  cryptos: {
    name: string;
    image: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    sparkline_in_7d: { price: [] };
  }[];
  inputHandler: () => void;
  searchValue: React.RefObject<HTMLInputElement>;
}
