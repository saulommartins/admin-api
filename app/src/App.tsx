import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import colors from './styles/colors';


console.log(DefaultTheme.colors);
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    accent: "#03dac4",
    backdrop: "rgba(0, 0, 0, 0.5)",
    background: colors.senary,
    disabled: "rgba(0, 0, 0, 0.26)",
    error: colors.error,
    notification: colors.notification,
    onBackground: "#000000",
    onSurface: "#000000",
    placeholder: "rgba(0, 0, 0, 0.54)",
    primary: colors.secondary,
    surface: colors.senary,
    text: "#000000"
  },
};

const App: React.FC = () => {
  console.log("aaaa");
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;