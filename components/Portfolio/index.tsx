import { AiFillDelete } from 'react-icons/ai';
import Link from 'next/link';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Image from 'next/image';
import { removeFromPortfolio } from '../../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import PortfolioTypes from '../../interfaces/portfolioTypes';
import { removedAlert } from '../Toasts';

const Portfolio = ({ portfolio }: PortfolioTypes) => {
  const dispatch = useDispatch();

  if (portfolio.length === 0) {
    return (
      <div>
        <h2 className='text-center text-lg lg:text-xl'>
          You have no coins currently in your portfolio
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <div className='overflow-auto'>
          <table>
            <thead className='sticky top-0 bg-extraLightBlue z-30 animation'>
              <tr>
                <th>Rank</th>
                <th>Coin</th>

                <th>Price</th>
                <th>24h</th>
                <th className='nowrap'>24h Volume</th>
                <th className='nowrap'>Market</th>
                <th className='nowrap'>Last 7 Days</th>
                <th className='nowrap'>Remove Coin</th>
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
                    <td className='flex gap-3 items-center  mr-[32px] lg:mr-[0px]'>
                      <Image
                        src={image}
                        alt={name}
                        width={30}
                        height={30}
                        className='w-auto h-auto'
                      />
                      <div className='flex flex-col lg:flex-row lg:gap-3 lg:items-baseline'>
                        <Link
                          href={`coins/${id}`}
                          className='hover:underline underline-offset-2 hover:text-blue duration-150 ease-in-out '
                        >
                          {name}
                        </Link>
                        <span className='text-xs uppercase'> {symbol} </span>
                      </div>
                    </td>
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
                          onClick={() => {
                            dispatch(removeFromPortfolio(crypto));
                            removedAlert(name);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default Portfolio;
