import { useLenis } from '../context/LenisContext';
import { useEffect } from 'react';

export const useOnScroll = (callback: Function) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on('scroll', callback);
    lenis.notify();

    return () => {
      lenis.off('scroll', callback);
    };
  }, [lenis, callback]);
};
