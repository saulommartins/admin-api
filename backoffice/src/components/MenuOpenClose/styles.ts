import styled, { keyframes, css } from 'styled-components';
import { Props } from '.';

const openMenuAnimation = keyframes`
  0% {
    width: 71px;
  }

  100% {
    width: 240px;
  }
`;

const closeMenuAnimation = keyframes`
  0% {
    width: 240px;
  }

  100% {
    width: 71px;
  }
`;

export const Container = styled.div<Props>`
  grid-area: MO;

  display: flex;
  flex-direction: column;
  align-items: left;

  background-color: var(--tertiary);
  padding: 11px 11px;


  overflow-y: scholl;

  ::-webkit-scrollbar {
    display: none;
  }
  width: min-content;

  ${props => props.menuOpen ? 
    css`
      width: 240px;
      animation: ${openMenuAnimation} .3s;
  ` : 
    css`
      animation: ${closeMenuAnimation} .3s;
      width: 71px;
  `}
`;
