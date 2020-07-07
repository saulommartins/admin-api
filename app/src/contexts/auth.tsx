import React, {
  createContext,
  useState,
  useEffect,
  useCallback ,
  useContext,
} from 'react';
import AuthService from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import { Alert } from 'react-native';

interface ISignIn {
  email: string;
  password: string;
}

interface ISignUp {
  name: string;
  email: string;
  cellphone: string;
  password: string;
}

interface IForgotPassword {
  email: string;
}

interface AuthContextData {
  signed: boolean;
  token?: string;
  user?: object | null;
  loading: boolean;
  signIn(data: ISignIn): { errors?: object} | {};
  signUp(data: ISignUp): { errors?: object} | {};
  signOut(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [ user, setUser ] = useState<object | null>(null);
  const [ token, setToken ] = useState("");
  const [ loading, setLoading ] = useState(true);
  const setApiToken = useCallback((token: string) => {
    api.defaults.headers['Authorizarion'] = `Berarer ${token}`;
  },[api]);
  useEffect(()=> {
    const loadStorageData = async () => {
      const [[ _, storagedUser ], [ __, storagedToken ]] = 
        await AsyncStorage.multiGet(['@RNAuth:user', '@RNAuth:token']);
      if (storagedUser && storagedToken) {
        setApiToken(token);
        setUser(JSON.parse(storagedUser));
        setToken(storagedToken);
      }
      setLoading(false);
    };
    loadStorageData();
  }, []);

  const signIn = async ({ email, password }: ISignIn) => {
    setLoading(true);
    try {
      const response = await AuthService.login({ email, password});
      const { token, user } = response?.data;
      setApiToken(token);
      setUser(user);
      setToken(token);
      await AsyncStorage.setItem('@RNAuth:token', token);
      setLoading(false);
      return {};
    } catch ( error ) {

      console.log(error?.response?.data?.message);
      Alert.alert('Ops!', error?.response?.data?.message,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);
      setLoading(false);
      return error?.response?.data?.message;
    }
  };

  const signUp = async ({ email, name, cellphone, password }: ISignUp) => {
    console.log("signUp...");
    setLoading(true);
    try {
      const response = await AuthService.register({ name, email, cellphone, password});
      const { token, user } = response?.data;
      if (!token || !user) {
        throw { message: 'Internal server error' };
      }
      setApiToken(token);
      setUser(user);
      setToken(token);
      await AsyncStorage.setItem('@RNAuth:token', token);
      setLoading(false);
      return {};
    } catch ( error ) {
      setLoading(false);
      return error.response.data;
    }
  };
  
  const signOut = async () => {
    setLoading(true);
    await AsyncStorage.multiRemove(['@RNAuth:user', '@RNAuth:token']);
    setUser(null);
    setLoading(false);
  };

  const forgotPassword = async ({ email }: IForgotPassword) => {
    console.log("signUp...");
    setLoading(true);
    try {
      const response = await AuthService.forgotPassword({ email });
      setLoading(false);
      return response;
    } catch ( error ) {
      setLoading(false);
      return error.response.data;
    }
  };
  
  return (
    <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        loading,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}