import styled from 'styled-components';
import { Props } from '.';
import { Menu, Close } from 'styled-icons/material';

export const Container = styled('div')`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  position: relative;
  cursor: pointer;
  color: rgb(256,255,255);

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    content: '';
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
  }

  transition: border-radius .2s, background-color .2s;

  &.active, &:hover {
    border-radius: 16px;
  }
  background-color: var(--rocketseat);
`;

export const IconClose = styled(Close) <Props>`
  width: 36px;
  height: 24px;
`;

export const IconOpen = styled(Menu) <Props>`
  width: 28px;
  height: 28px;
`;