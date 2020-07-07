import styled from 'styled-components/native';
import colors from '../styles/colors';

const ScrollView = styled.ScrollView.attrs({
  justifyContent: 'center',
})`
  flex: 1;
  backgroundColor: ${colors.senary};
`;

export default ScrollView;
