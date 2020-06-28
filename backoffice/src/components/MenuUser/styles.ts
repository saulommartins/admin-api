import styled from 'styled-components';
import { Props } from '.';
import { People } from 'styled-icons/material';
import { Container as DefaultContainer } from '../MenuIcon/styles'

export const Container = styled(DefaultContainer)`
  background-color: var(--primary);
  &.active, &:hover {
    border-radius: 16px;
    background-color: var(--discord);
  }
`;

export const Icon = styled(People)<Props>`
  width: 48px;
  height: 36px;
  color: var(--white);
`;
