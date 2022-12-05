import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import {
  arrayUnion,
  doc,
  updateDoc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import { closeSignUpModal, closeLoginModal } from '../redux/features/homeSlice';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>({});
  const [savedCoin, setSavedCoin] = useState<any>([]);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
    const data = doc(db, 'users', email);
    return setDoc(
      data,
      {
        portfolio: [],
      },
      { merge: true }
    );
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return signOut(auth);
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    const email: any = response.user.email;
    const data = doc(db, 'users', email);

    return setDoc(
      data,
      {
        portfolio: [],
      },
      { merge: true }
    );
  };

  const coinPath = doc(db, 'users', `${user?.email}`);

  useEffect(() => {
    onSnapshot(coinPath, (doc) => {
      setSavedCoin(doc.data()?.portfolio);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  const addToPortfolio = async (crypto: {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number | string;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    sparkline_in_7d: { price: [] } | string;
    market_cap_rank: number;
  }) => {
    const {
      id,
      name,
      image,
      symbol,
      current_price: price,
      price_change_percentage_24h,
      total_volume,
      market_cap,
      sparkline_in_7d,
      market_cap_rank,
    } = crypto;

    if (user?.email) {
      await updateDoc(coinPath, {
        portfolio: arrayUnion({
          id: id,
          name: name,
          image: image,
          symbol: symbol,
          price:
            typeof price === 'undefined' ? 'N/A' : `$${price.toLocaleString()}`,
          price_change_percentage_24h: price_change_percentage_24h,
          market_cap: market_cap,
          market_cap_rank: market_cap_rank,
          total_volume: total_volume,
          sparkline_in_7d:
            typeof sparkline_in_7d === 'undefined' ? 'N/A' : sparkline_in_7d,
        }),
      });
    } else {
      return;
    }
  };

  const removeFromPortfolio = async (crypto: {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    sparkline_in_7d: { price: [] };
    market_cap_rank: number;
  }) => {
    try {
      const result = savedCoin.filter(
        (item: { id: string }) => item.id !== crypto.id
      );
      await updateDoc(coinPath, {
        portfolio: result,
      });
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        googleSignIn,
        addToPortfolio,
        removeFromPortfolio,
        savedCoin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
