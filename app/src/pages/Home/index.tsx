import React, { useState, useEffect } from 'react';
import {
  Button,
  Header,
  Text,
  Logo,
  View,
  ViewBasic,
} from '../../components'
import { useAuth } from '../../contexts/auth';
import { NavigationContainer } from '@react-navigation/native';
import { Animated } from 'react-native';
import __translate from '../../resources/lang';

interface Props {
  navigation: any;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const [offset] = useState(
    new Animated.ValueXY({ x: 0, y: 80 })
  );
  const [opacity] = useState(new Animated.Value(0));
  const { loading, signed, signIn } = useAuth();
  const goSignIn = () => {
    navigation.navigate('SignIn');
  }
  const goSignUp = () => {
    navigation.navigate('SignUp');
  }
  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        useNativeDriver: true,
        toValue: 0,
        speed: 1,
        bounciness: 5
      }),
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1500,
      })
    ]).start();
  }, []);

  return (
    <View>
      <Logo
        source={require('../../assets/logo.png')}
      />
      <Header>{__translate('welcome')}</Header>

      <ViewBasic
        as={Animated.View}

        style={[
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}>
        <Button
          onPress={goSignIn}
          mode="contained"
          loading={loading}
          icon="login"
        >{__translate('signin')}</Button>
        <Button
          onPress={goSignUp}
          mode="outlined"
          loading={loading}
          icon="account-plus"
        >{__translate('signup')}</Button>
      </ViewBasic>
    </View>
  );
}

export default Home;
