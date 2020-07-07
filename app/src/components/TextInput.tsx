import styled from 'styled-components/native';
import colors from '../styles/colors';
import { TextInput as PaperTextInput } from 'react-native-paper';

const TextInput = styled(PaperTextInput).attrs({
  clearButtonMode: "while-editing",
  inlineImageLeft: "search_icon",
  selectionColor: colors.secondary,
  mode: "flat",
  color: 'red',
  underlineColor: colors.secondary,
})`
  width: 80%;
  /* padding: 10px; */
  /* margin-bottom:ddsfsdf 10px; */
  margin-top: 20px;
  /* color: ${colors.primary}; */
  border-radius: 7px;
  
`;


export default TextInput;
