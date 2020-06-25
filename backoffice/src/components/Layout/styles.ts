import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  /* grid-template-columns: 71px auto 240px; */
  grid-template-columns: min-content auto 240px;
  grid-template-rows: 71px auto 52px;
  grid-template-areas: 
    'ML MI UI'
    'ML MV MV'
    'ML SI SI';
  height: 100vh;
`;
