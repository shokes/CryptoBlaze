import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    function handleClick() {
      console.log('click event triggered');
    }

    // 👇️ optionally set body height to full screen
    document.body.style.minHeight = '100vh';

    document.body.addEventListener('click', handleClick);

    return () => {
      // 👇️ remove event listener when the component unmounts
      document.body.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
