import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </Provider>
    </>
  );
}
