import { AiFillDelete } from 'react-icons/ai';
import Link from 'next/link';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Image from 'next/image';
import { removeFromPortfolio } from '../../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import PortfolioTypes from '../../interfaces/portfolioTypes';

const Portfolio = ({ portfolio }: PortfolioTypes) => {
  const dispatch = useDispatch();

  if (portfolio.length === 0) {
    return (
      <div>
        <h2 className='text-center text-xl'>
          You have no coins currently in your portfolio
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <thead className='sticky top-0 bg-extraLightBlue z-30 animation'>
            <tr>
              <th>Rank</th>
              <th>Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th>24h Volume</th>
              <th>Market</th>
              <th>Last 7 Days</th>
              <th>Remove Coin</th>
            </tr>
          </thead>

          <tbody>
            {portfolio?.map((crypto) => {
              const {
                id,
                name,
                image,
                symbol,
                current_price: price,
                price_change_percentage_24h,
                total_volume,
                market_cap,
                sparkline_in_7d,
                market_cap_rank,
              } = crypto;

              return (
                <tr key={market_cap_rank}>
                  <td>{market_cap_rank}</td>
                  <td className='flex gap-3 items-center'>
                    <Image
                      src={image}
                      alt={name}
                      width={30}
                      height={30}
                      className='w-auto h-auto'
                    />
                    <Link
                      href={`coins/${id}`}
                      className='hover:underline underline-offset-2'
                    >
                      {name}
                    </Link>
                  </td>
                  <td className='uppercase text-sm'>{symbol}</td>
                  <td>{price ? '$' + price.toLocaleString() : 'N/A'}</td>
                  <td
                    className={`${
                      price_change_percentage_24h > 0
                        ? 'text-green'
                        : 'text-red'
                    }`}
                  >
                    {price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td>${total_volume.toLocaleString()}</td>
                  <td>${market_cap.toLocaleString()}</td>
                  <td>
                    {sparkline_in_7d.price ? (
                      <Sparklines data={sparkline_in_7d.price}>
                        <SparklinesLine color='#1864ab' />
                      </Sparklines>
                    ) : (
                      'N/A'
                    )}
                  </td>

                  <td>
                    <div className='relative'>
                      <AiFillDelete
                        className=' w-[32px] absolute -top-[19px] h-[32px] right-1/2 cursor-pointer'
                        onClick={() => dispatch(removeFromPortfolio(crypto))}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};
export default Portfolio;