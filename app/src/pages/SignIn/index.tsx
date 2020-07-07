import React from 'react';
import {
  Button,
  ErrorMessage,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Header,
} from '../../components';
import { EsqueceuSuaSenha } from './styles';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../contexts/auth';
import { Platform, Keyboard } from 'react-native';
import __translate from '../../resources/lang';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  navigation: any;
};

const SignIn: React.FC<Props> = ({ navigation }) => {
  const { loading, signed, signIn } = useAuth();
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data: { email: string, password: string }) => {
    console.log(data);
    signIn(data);
  }

  const goToRocoveryPassword = () => {
    navigation.navigate("ForgotPassword");
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header>{__translate('welcome')}</Header>

          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                value={value}
                label={__translate('email')}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                error={errors.email}
                disabled={loading}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.email && <ErrorMessage>{__translate('email_required')}</ErrorMessage>}

          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                value={value}
                label={__translate('password')}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                autoCapitalize="none"
                secureTextEntry={true}
                autoCompleteType="password"
                error={errors.password}
                disabled={loading}
              />

            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.password && <ErrorMessage>{__translate('password_required')}</ErrorMessage>}
          
          <Button
            onPress={handleSubmit(onSubmit)}
            mode="contained"
            disabled={loading}
            loading={loading}
            icon="login"
          >{__translate('signin')}</Button>
          
          <TouchableOpacity
            onPress={goToRocoveryPassword}
          >
            <EsqueceuSuaSenha>{__translate('forgot_password')}</EsqueceuSuaSenha>
          </TouchableOpacity>
          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
