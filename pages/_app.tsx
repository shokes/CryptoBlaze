import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/AuthContext';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { Fragment } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <AuthContextProvider>
          <Toaster position='bottom-right' />
          <Component {...pageProps} />
        </AuthContextProvider>
      </Provider>
    </Fragment>
  );
}
