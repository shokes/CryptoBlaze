import React from 'react';
import { menuItems } from '../../routes';
import MenuType from '../../interfaces/menuTypes';
import Link from 'next/link';
import { BsFillStarFill } from 'react-icons/bs';

const Menu = ({ active }: MenuType) => {
  return (
    <div className='my-[40px] relative'>
      <div className='flex items-center gap-[44px] lg:gap-[64px] overflow-x-auto pb-[3.4px] menu-items font-medium'>
        {menuItems.map((item) => {
          const { title, id, url, path } = item;

          return (
            <Link
              href={url}
              key={id}
              className={` flex items-center  nowrap  gap-2  ${
                active?.toLocaleLowerCase() === path.toLocaleLowerCase()
                  ? 'active '
                  : 'hover'
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
