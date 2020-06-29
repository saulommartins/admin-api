import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Container, Form, UserName, Password, SubmitButton } from './styles';

import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';

// const required = (value: boolean) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };


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
    console.log(data);
    // e.preventDefault();
    setLoading(true);
    setMessage("Loading");

    // if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(data).then(
        () => {
          console.log('logado...');
          history.push("/dashboard");
          // window.location.reload();
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
    // } else {
    //   setLoading(false);
    // }
  };

  const validateUserName = async (username: string) => {
    console.log(`validate user name on api ${username}`);
    return true;
  }
  return (
    <Container>
      <Form
        onSubmit={handleSubmit(handleLogin)}
      // ref={c => {
      //   this.form = c;
      // }}
      >
          <Controller
            label="Username"
            name="username"
            as={UserName}
            control={control}
            rules={{ required: true }}
            variant="outlined"
            defaultValue={""}
          />
          {errors.username && errors.username.type === "required" && (
            <p>This is required</p>
          )}

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
        {/* <CheckButton
            style={{ display: "none" }}
          // ref={c => {
          //   this.checkBtn = c;
          // }}
          /> */}
      </Form>
    </Container>
  );
};

export default Login;