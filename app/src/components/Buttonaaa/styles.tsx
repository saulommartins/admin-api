import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { Button } from 'react-native-paper';

const PaperButton = styled(Button)`
  width: 75%;
  background-color: ${colors.primary};
  margin-top: 20px;
`;

export default PaperButton;
