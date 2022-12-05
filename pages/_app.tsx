import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/AuthContext';
import { DefaultSeo } from 'next-seo';
import { Toaster } from 'react-hot-toast';
import { Fragment } from 'react';
import { LenisProvider } from '../context/LenisContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <DefaultSeo titleTemplate='%s | CryptoBlaze' defaultTitle='CryptoBlaze' />
      <Provider store={store}>
        <LenisProvider>
          <AuthContextProvider>
            <Toaster position='bottom-right' />
            <Component {...pageProps} />
          </AuthContextProvider>
        </LenisProvider>
      </Provider>
    </Fragment>
  );
}
