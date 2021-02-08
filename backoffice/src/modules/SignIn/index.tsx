import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Form,
  UserName,
  Password,
  SubmitButton,
  SignInCard,
  SignInFields,
  SignInCardActions,
  Notification
} from './styles';

import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';

export interface Props {
}

export interface ISignUp {
  email: string;
  password: string;
}

type SignUpForm = {
  email: string;
  password: string;
};

const SignIn: React.FC<Props> = () => {
  const history = useHistory();
  const { errors, handleSubmit, control } = useForm<SignUpForm>();
  const [message, setMessage] = useState("");

  const handleSignUp = (data: ISignUp) => {
    setMessage("Loading");

    AuthService.login(data).then(
      () => {
        history.push("/dashboard");
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  };

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(handleSignUp)}
      >
        <SignInCard>
          <SignInFields>
            <Controller
              label="E-mail"
              name="email"
              as={UserName}
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                },
              }}
              // variant="outlined"
              defaultValue={""}
            />
            {errors.email && errors.email.type === "required" && (
              <Notification>
                <span>E-mail is required</span>
              </Notification>
            )}
            <p>{errors.email && errors.email.message}</p>


            <Controller
              label="Password"
              type="password"
              name="password"
              as={Password}
              control={control}
              rules={{
                required: true,
              }}
              // variant="outlined"
              defaultValue={""}
            />
            {errors.password && errors.password.type === "required" && (
              <Notification>
                <span>Password is required</span>
              </Notification>
            )}
            <SignInCardActions>
              <SubmitButton
                variant="contained"
                type="submit"
                color="primary"
                // disabled={loading}
                fullWidth
              >
                <span>Sign In</span>
              </SubmitButton>
            </SignInCardActions>

            {message && (
              <Notification>
                <span>
                  {message}
                </span>
              </Notification>
            )}
          </SignInFields>
        </SignInCard>
        {/* <Notification /> */}
      </Form>
    </Container>
  );
};

export default SignIn;