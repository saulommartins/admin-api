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
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../contexts/auth';
import { Platform, Keyboard } from 'react-native';
import __translate from '../../resources/lang';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ForgotPassword: React.FC = () => {
  const { loading, signed, signIn } = useAuth();
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data: { email: string, password: string }) => {
    console.log(data);
    signIn(data);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header>{__translate('restore_password')}</Header>

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
          
          <Button
            onPress={handleSubmit(onSubmit)}
            mode="contained"
            disabled={loading}
            loading={loading}
            icon="email"
          >{__translate('send_reset_instructions')}</Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default ForgotPassword;
