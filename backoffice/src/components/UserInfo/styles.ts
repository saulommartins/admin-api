import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UI;
  
  display: flex;
  align-items: center;
  
  background-color: var(--tertiary);
  >span {
    color: var(--white);
  }
`;
