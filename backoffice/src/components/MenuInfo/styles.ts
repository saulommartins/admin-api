import styled from 'styled-components';
import { Menu } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: MI;
  
  display: flex;
  align-items: center;
  flex-direction: line;
  padding: 11px 0;
  max-height: 100vh;
  
  background-color: var(--tertiary);
  >span {
    color: var(--white);
  }
`;

export const MenuTitle = styled.span`
  color: var(--white);
  align-items: center;

`;

export const MenuDetail = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin-bottom: 1px;
  
  background-color: var(--primary);
  align-items: center;

  &.active, &:hover {
    border-radius: 16px;
    background-color: 'var(--discord)'
  }
  transition: border-radius .2s, background-color .2s;

`;
