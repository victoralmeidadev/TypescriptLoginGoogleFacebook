import React, {
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from 'react';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';

const AuthContext = createContext({});
const FACEBOOK_LOGIN_TYPE = 'facebook';
const GOOGLE_LOGIN_TYPE = 'google';

export const AuthProvider: React.FC = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [loginType, setLoginType] = useState<null | 'facebook' | 'google'>(
    null,
  );

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '895477930717-rejqvn38t0hn364iao9dssuj4naqfinc.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  //Facebook Login
  const useOnLoginFinished = useCallback((navigation) => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          let infoRequest = new GraphRequest(
            '/me?fields=name,picture,email',
            null,
            (err, res) => {
              if (res) {
                const { name, email, picture } = res;
                const { data } = picture;
                const { url: photo } = data;
                setUserInfo({ name, photo, email });
                setIsSigned(true);
                setLoginType(FACEBOOK_LOGIN_TYPE);
                navigation.navigate('Home');
              }
              if (err) {
                setUserInfo({});
                setIsSigned(false);
                setLoginType(null);
              }
            },
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        setUserInfo({});
        setIsSigned(false);
        setLoginType(null);
      },
    );
  }, []);

  //Google Login
  const useSignInGoogle = useCallback(async (navigation) => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { name, photo, email } = userInfo?.user;
      setUserInfo({ name, photo, email });
      setIsSigned(true);
      setLoginType(GOOGLE_LOGIN_TYPE);
      navigation.navigate('Home');
    } catch (error) {
      console.error({ error });
    }
  }, []);

  const useSignOutGoogle = useCallback(async (navigation) => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsSigned(false);
      setUserInfo({});
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  }, []);

  const useSignOut = useCallback(
    (navigation) => {
      switch (loginType) {
        case FACEBOOK_LOGIN_TYPE: {
          LoginManager.logOut();
          setIsSigned(false);
          setUserInfo({});
          navigation.navigate('Login');
          break;
        }
        case GOOGLE_LOGIN_TYPE: {
          useSignOutGoogle(navigation);
        }
        default:
          break;
      }
    },
    [loginType],
  );

  return (
    <AuthContext.Provider
      value={{
        isSigned,
        setIsSigned,
        userInfo,
        setUserInfo,
        loginType,
        setLoginType,
        useOnLoginFinished,
        useSignInGoogle,
        useSignOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

interface IAuthContext {
  isSigned: boolean;
  userInfo: object;
  setUserInfo: Function;
  loginType: string;
  setLoginType: Function;
  useOnLoginFinished: Function;
  useSignInGoogle: Function;
  useSignOut: Function;
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  return context as IAuthContext;
};

export default AuthProvider;
