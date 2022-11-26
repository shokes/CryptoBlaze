import NavigationTypes from '../interfaces/navigationTypes';
import MenuItemsTypes from '../interfaces/menuItemsTypes';

export const navItems: NavigationTypes[] = [
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

export const menuItems: MenuItemsTypes[] = [
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
