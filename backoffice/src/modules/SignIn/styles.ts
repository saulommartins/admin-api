import styled, { css } from 'styled-components';
import { TextField } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 350px;
  max-height: 270px;
  height: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const sharedStyles = css`
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 40px;
  box-sizing: border-box;
`;

export const UserName = styled(TextField)`
  /* display: block; */
  width: 100%;
  ${sharedStyles}
`;

export const Password = styled(TextField)`
  /* display: block; */
  width: 100%;
  ${sharedStyles}
`;

export const SubmitButton = styled.button`
  /* display: block; */
  background-color: var(--senary);
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;