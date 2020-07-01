import styled, { css } from 'styled-components';
import {
  TextField,
  Card,
  CardActions,
  Button
} from '@material-ui/core';

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: url(https://source.unsplash.com/random/1600x900);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Form = styled.form`
`;

export const SignInCard = styled(Card)`
  min-width: 300px;
`;

export const SignInFields = styled.div`
  padding: 1em 1em 1em 1em;
`;

const sharedStyles = css`
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  box-sizing: border-box;
  margin-top: 1em;
`;

export const UserName = styled(TextField)`
  width: 100%;
  ${sharedStyles}
`;

export const Password = styled(TextField)`
  width: 100%;
  ${sharedStyles}
`;

export const SignInCardActions = styled(CardActions)`
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0;
`;

export const SubmitButton = styled(Button)`
  background-color: var(--senary);
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const Notification = styled.div`
  text-align: right!important;
  > span {
    color: var(--notification);
    font-size: 13px;
  }
`;
