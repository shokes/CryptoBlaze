import { BsFillMoonFill } from 'react-icons/bs';
import Logo from '../../public/Logo/CryptoBlazeLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavigationTypes from '../../interfaces/navigationTypes';

const Navigation = () => {
  const navItems: NavigationTypes[] = [
    {
      id: 1,
      title: 'Cryptocurrencies',
      url: '/',
      subTitles: [
        {
          title: 'Trending Coins',
          url: '/',
        },
        {
          title: 'New Cryptocurrencies',
          url: '/',
        },
        {
          title: 'Global Charts',
          url: '/',
        },
        {
          title: 'All Coins',
          url: '/',
        },
        {
          title: 'By Market Cap',
          url: '/',
        },
      ],
    },

    {
      id: 2,
      title: 'Exchanges',
      url: '/',
      subTitles: [
        {
          title: 'Crypto Exchanges',
          url: '/',
        },
        {
          title: 'Decentralized Exchanges',
          url: '/',
        },
        {
          title: 'Derivatives',
          url: '/',
        },
      ],
    },

    {
      id: 3,
      title: 'NFT',
      url: '/',
      subTitles: [
        {
          title: 'NFT Floor price',
          url: '/',
        },
        {
          title: 'NFT Related Coins',
          url: '/',
        },
      ],
    },
  ];

  return (
    <section >
      <div className='flex items-center gap-5 justify-between pt-5 font-medium'>
        <Link href='/' className='flex gap-2 items-center font-bold text-xl'>
          {' '}
          <Image src={Logo} width={50} height={50} alt='logo' /> CryptoBlaze
        </Link>{' '}
        {navItems.map((item) => {
          const { title, id, subTitles } = item;

          return (
            <div key={id} className='dropdown dropdown-hover '>
              <a
                tabIndex={0}
                className='cursor-pointer   hover:text-blue duration-150 ease-in-out'
              >
                {title}
              </a>
              <ul
                tabIndex={0}
                className='dropdown-content bg-extraLightBlue border border-gray-500 text-base     rounded w-72 flex flex-col '
              >
                {subTitles.map((item) => {
                  return (
                    <li
                      key={item.title}
                      className='hover:text-blue hover:bg-lightBlue text-sm  cursor-pointer p-3 duration-150 ease-in-out'
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div>
          <BsFillMoonFill />
        </div>
        <div>Portfolio</div>
        <div className='hover:text-blue cursor-pointer duration-150 ease-in-out'>
          Sign In
        </div>
        <button className='bg-blue py-1 px-3 text-[#fff] rounded hover:bg-hover duration-150 ease-in-out'>
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Navigation;
