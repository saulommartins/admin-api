import React, { useContext } from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Header,
} from '../../components';
import { useAuth } from '../../contexts/auth';
import __translate from '../../resources/lang';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Header>Dashboard </Header>
      <Button onPress={() => {  }}>Products</Button>

      <Button onPress={() => { signOut(); }}>{__translate('signout')}</Button>
    </View>
  );}

export default Dashboard;
