import React from 'react';
import MenuItemsTypes from '../../interfaces/menuItemsTypes';
import MenuType from '../../interfaces/menuTypes';
import Link from 'next/link';
import { BsFillStarFill } from 'react-icons/bs';

const Menu = ({ active }: MenuType) => {
  const menuItems: MenuItemsTypes[] = [
    {
      id: 1,
      title: 'Portfolio',
      url: '/portfolio',
      path: 'Hom',
    },

    {
      id: 2,
      title: 'Coins',
      url: '/',
      path: 'home',
    },

    {
      id: 3,
      title: 'New Coins',
      url: '/new-coins',
      path: 'new-coins',
    },

    {
      id: 4,
      title: 'Trending',
      url: '/trending',
      path: 'trending',
    },

    {
      id: 5,
      title: 'NFT',
      url: '/nft',
      path: 'nft',
    },
  ];
  return (
    <div className='my-[40px]'>
      <div className='flex items-center gap-[64px] font-medium'>
        {menuItems.map((item) => {
          const { title, id, url } = item;
          return (
            <Link
              href={url}
              key={id}
              className={` flex items-center gap-2  ${
                active === item.path ? 'active ' : 'hover'
              }`}
            >
              {title === 'Portfolio' ? (
                <BsFillStarFill className='text-[#fc6]' />
              ) : null}{' '}
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
