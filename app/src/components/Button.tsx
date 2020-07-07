import styled from 'styled-components/native';
import colors from '../styles/colors';
import { Button as PaperButton} from 'react-native-paper';

const Button = styled(PaperButton).attrs(props => ({
  uppercase: false,
  contentStyle: { height: 52 },
  labelStyle: { 
    fontSize: 18,
    fontWeight: 'bold',
  },
  ...props,
}))`
  width: 80%;
  /* background-color: ${colors.primary}; */
  margin-top: 20px;
  border-radius: 10px;
  /* font-family: Roboto; */
  font-weight: bold;
  /* font-size: 18; */
`;
  /* background-color: ${props => props.mode === "outlined" ? "" : ${colors.primary} }; */

export default Button;
