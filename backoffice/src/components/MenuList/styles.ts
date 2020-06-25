import styled from 'styled-components';
import { Props } from '.';

export const Container = styled.div<Props>`
  grid-area: ML;

  display: flex;
  flex-direction: column;
  align-items: left;

  background-color: var(--tertiary);
  padding: 11px 11px;


  max-height: 100vh;
  overflow-y: scholl;

  ::-webkit-scrollbar {
    display: none;
  }
  width: ${(props) =>
    props.menuOpen ? '240px' : 'min-content'};
  transition: width .2s;

`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px soline var(--quartenary);

  margin-bottom: 10px;
`;