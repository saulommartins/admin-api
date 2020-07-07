import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

const AuthStach = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AuthStach.Navigator>
    <AuthStach.Screen name="Dashboard" component={Dashboard} /> 
  </AuthStach.Navigator>
);

export default AppRoutes;
