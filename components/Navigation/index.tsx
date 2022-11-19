import { BsFillMoonFill } from 'react-icons/bs';
import Logo from '../../public/Logo/CryptoBlazeLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavigationTypes from '../../interfaces/navigationTypes';
import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { openLoginModal } from '../../redux/features/homeSlice';
import { openSignUpModal } from '../../redux/features/homeSlice';

const Navigation = () => {
  const { loginModal, signUpModal } = useSelector(
    (store: RootState) => store.home
  );
  const dispatch = useDispatch();

  const navItems: NavigationTypes[] = [
    {
      id: 1,
      title: 'Cryptocurrencies',

      subTitles: [
        {
          title: 'Trending Coins',
          url: '/trending',
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

      subTitles: [
        {
          title: 'NFT Floor price',
          url: '/nft',
        },
        {
          title: 'NFT Related Coins',
          url: '/nft',
        },
      ],
    },
  ];

  return (
    <section className='relative'>
      <div className='flex items-center gap-5 justify-between pt-5 font-medium'>
        <Link href='/' className='flex gap-2 items-center font-bold text-xl'>
          {' '}
          <Image
            src={Logo}
            width={50}
            height={50}
            alt='logo'
            className='w-auto h-auto'
          />{' '}
          CryptoBlaze
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
                    <Link
                      key={item.title}
                      href={item.url}
                      className='hover:text-blue hover:bg-lightBlue text-sm  cursor-pointer p-3 duration-150 ease-in-out'
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div>
          <BsFillMoonFill />
        </div>
        <Link
          href='/portfolio'
          className='hover:text-blue duration-150 ease-in-out'
        >
          Portfolio
        </Link>
        <button
          className='hover:text-blue cursor-pointer duration-150 ease-in-out'
          onClick={() => {
            dispatch(openLoginModal());
          }}
        >
          Login
        </button>
        <button
          className='bg-blue py-1 px-3 text-[#fff] rounded hover:bg-hover duration-150 ease-in-out'
          onClick={() => {
            dispatch(openSignUpModal());
          }}
        >
          Sign Up
        </button>
      </div>

      {loginModal && <LoginModal />}

      {signUpModal && <SignUpModal />}
    </section>
  );
};

export default Navigation;
