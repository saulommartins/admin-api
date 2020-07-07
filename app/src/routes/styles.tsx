import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #DDD;
  opacity: 0.7
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: "large",
  color: "#777"
})`

`;