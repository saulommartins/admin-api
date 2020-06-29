import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Container, Form, UserName, Password, SubmitButton } from './styles';

import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';

export interface Props {
}

export interface ILogin {
  username: string;
  password: string;
}

type LoginForm = {
  username: string;
  password: string;
};

const Login: React.FC<Props> = () => {
  const history = useHistory();
  const { errors, handleSubmit, control } = useForm<LoginForm>();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (data: ILogin) => {
    setLoading(true);
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

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  const validateUserName = async (username: string) => {
    console.log(`validate user name on api ${username}`);
    return true;
  }
  return (
    <Container>
      <Form
        onSubmit={handleSubmit(handleLogin)}
      >
        <Controller
          label="Username"
          name="username"
          as={UserName}
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          }}
          variant="outlined"
          defaultValue={""}
        />
        {errors.username && errors.username.type === "required" && (
          <p>Username is required</p>
        )}
        <p>{errors.username && errors.username.message}</p>


        <Controller
          label="Password"
          type="password"
          name="password"
          as={Password}
          control={control}
          rules={{ required: true }}
          variant="outlined"
          defaultValue={""}
        />
        {errors.username && errors.username.type === "required" && (
          <p>Password is required</p>
        )}

        <div className="form-group">
          <SubmitButton>
            <span>Login</span>
          </SubmitButton>
        </div>

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default Login;