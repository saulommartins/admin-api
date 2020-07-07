import React, { useEffect, useState } from 'react';
import {
  Button,
  ErrorMessage,
  TextInput,
  View,
  Logo,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Header,
  ScrollView,
} from '../../components';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../contexts/auth';
import { Platform, Keyboard } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { Animated } from 'react-native';
import __translate from '../../resources/lang';

interface ISignUp {
  name: string;
  email: string;
  cellphone: string;
  password: string;
};
interface IServerError {
  name: null,
  email: null,
  cellphone: null,
  password: null,
};

const SignUp: React.FC = () => {
  const [logo] = useState(
    new Animated.ValueXY({ x: 128, y: 128 })
  );
  const [header] = useState(
    new Animated.Value(26)
  );
  const { loading, signed, signUp } = useAuth();
  const { control, handleSubmit, errors, setValue } = useForm();
  const [serverError, setServerError] = useState<IServerError | null>(null);
  const [cellphoneExtracted, setCellPhoneExtracted] = useState<string | null | undefined>("");

  const onSubmit = async (data: ISignUp) => {
    data = {
      ...data,
      cellphone: "cellphoneExtracted",
    };
    console.log(data);
    setServerError(null);
    const result = await signUp(data);
    if (result?.errors) {
      setServerError(result.errors as IServerError);
    }
  }
  const keyboardWillShow = (event: any) => {
    Animated.parallel([
      Animated.timing(logo.x, {
        useNativeDriver: false,
        duration: event.duration,
        toValue: 55,
      }),
      Animated.timing(logo.y, {
        useNativeDriver: false,
        duration: event.duration,
        toValue: 55,
      }),
      Animated.timing(header, {
        useNativeDriver: false,
        duration: event.duration,
        toValue: 16,
      }),
    ]).start();
  };
  const keyboardWillHide = (event: any) => {
    Animated.parallel([
      Animated.timing(logo.x, {
        useNativeDriver: false,
        duration: event.duration,
        toValue: 128,
      }),
      Animated.timing(logo.y, {
        useNativeDriver: false,
        duration: event.duration,
        toValue: 128,
      }),
      Animated.timing(header, {
        useNativeDriver: false,
        duration: event.duration,
        toValue: 26,
      }),
    ]).start();
  };
  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener("keyboardWillShow", keyboardWillShow);
    const keyboardWillHideListener = Keyboard.addListener("keyboardWillHide", keyboardWillHide);
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Logo
              as={Animated.Image}
              style={{
                width: logo.x,
                height: logo.y,
              }}
              source={require('../../assets/logo.png')}
            />
            <Header
              as={Animated.Text}
              style={{
                fontSize: header,
              }}
            >{__translate('welcomesignup')}</Header>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  value={value}
                  label={__translate('name')}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  autoCompleteType="name"
                  error={errors.name || serverError?.name}
                />
              )}
              name="name"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.name && <ErrorMessage>{__translate('name_required')}</ErrorMessage>}
            {serverError?.name && <ErrorMessage>{serverError?.name}</ErrorMessage>}

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  value={value}
                  label={__translate('email')}
                  onBlur={onBlur}
                  onChangeText={value => {
                    console.log("value", value);
                    if (serverError?.email) {
                      setServerError({
                        ...serverError,
                        email: null,
                      });
                    }
                    onChange(value);
                  }}
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoCompleteType="email"
                  error={errors.email || serverError?.email}
                  disabled={loading}
                />
              )}
              name="email"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.email && <ErrorMessage>{__translate('email_required')}</ErrorMessage>}
            {serverError?.email && <ErrorMessage>{serverError?.email}</ErrorMessage>}

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  value={value}
                  label={__translate('cellphone')}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  autoCapitalize='none'
                  autoCompleteType="tel"
                  keyboardType="number-pad"
                  error={errors.cellphone || serverError?.cellphone}
                  disabled={loading}
                  render={props =>
                    <TextInputMask
                      {...props}
                      onChangeText={(value?: string, extracted?: string) => {
                        setCellPhoneExtracted(extracted);
                        props?.onChangeText(value);
                      }}
                      mask="([00]) [00000]-[0000]"
                    />
                  }
                />
              )}
              name="cellphone"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.cellphone && <ErrorMessage>{__translate('cellphone_required')}</ErrorMessage>}
            {serverError?.cellphone && <ErrorMessage>{serverError?.cellphone}</ErrorMessage>}

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  value={value}
                  label={__translate('password')}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  autoCompleteType="password"
                  error={errors.password || serverError?.password}
                  disabled={loading}
                />

              )}
              name="password"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.password && <ErrorMessage>{__translate('password_required')}</ErrorMessage>}
            {serverError?.password && <ErrorMessage>{serverError?.password}</ErrorMessage>}

            <Button
              onPress={handleSubmit(onSubmit)}
              mode="contained"
              disabled={loading}
              loading={loading}
              icon="account-plus"
            >{__translate('signup')}</Button>
          </View>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default SignUp;
