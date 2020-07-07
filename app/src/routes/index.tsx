import React, { useContext } from 'react';
import { useAuth } from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { View, ActivityIndicator } from './styles';

const Routes: React.FC = () => {
  const { signed, loading  } = useAuth();
  // if ( loading ) {
  //   return (
  //     <View>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // }
  return (signed ? <AppRoutes /> : <AuthRoutes />);
}

export default Routes;