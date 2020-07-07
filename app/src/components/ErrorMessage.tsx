import styled from 'styled-components/native';
import colors from '../styles/colors';

const ErrorMessage = styled.Text`
  width: 80%;
  padding: 0 10px 0 0;
  text-align: right;
  color: ${colors.notification}
`;

export default ErrorMessage;
