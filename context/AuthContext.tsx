import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { closeLoginModal, closeSignUpModal } from '../redux/features/homeSlice';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        dispatch(closeLoginModal());
        dispatch(closeSignUpModal());
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    // document.documentElement.classList = theme;
    //  document.documentElement.classList.toggle(theme);
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    // eslint-disable-next-line
  }, [theme]);

  const themeHandler = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else if (theme === 'light-theme') {
      setTheme('dark-theme');
    }
  };

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const googleSignIn = () => {
    signInGoogle()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, themeHandler, theme, signup, logout, googleSignIn }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
