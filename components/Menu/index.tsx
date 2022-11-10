import React from 'react';
import MenuTypes from '../../interfaces/menuTypes';

const Menu = () => {
  const menuItems: MenuTypes[] = [
    {
      id: 1,
      title: 'Portfolio',
      url: '/',
    },

    {
      id: 2,
      title: 'Coins',
      url: '/',
    },

    {
      id: 3,
      title: 'New Coins',
      url: '/',
    },

    {
      id: 4,
      title: 'Trending',
      url: '/',
    },

    {
      id: 5,
      title: 'NFT',
      url: '/',
    },
  ];
  return (
    <div>
      <div className='flex items-center gap-[64px] font-medium'>
        {menuItems.map((item) => {
          const { title, id } = item;
          return <div key={id}>{title}</div>;
        })}
      </div>
    </div>
  );
};

export default Menu;
