import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import colors from '../styles/colors'
import { Text } from '../components';
import __translate from '../resources/lang';
const AuthStach = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStach.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
        // fontFamily: 'Roboto',
      },
      headerBackTitleStyle: {
        fontWeight: 'bold',
        color: colors.tertiary,
        // backgroundColor: colors.tertiary,
        // fontFamily: 'Roboto',
      },
    }}>
    <AuthStach.Screen 
        options={{ title: __translate('home') }} 
        name="Home" 
        component={Home} /> 
    <AuthStach.Screen
      options={{ title: __translate('signin') }}
      name="SignIn"  
      component={SignIn} /> 
    <AuthStach.Screen
      name="SignUp"
      options={{ title: __translate('signup') }}
      component={SignUp} /> 
    <AuthStach.Screen
      name="ForgotPassword"
      options={{ title: __translate('forgot_password') }}
      component={ForgotPassword} /> 
      
  </AuthStach.Navigator>
);

export default AuthRoutes;
