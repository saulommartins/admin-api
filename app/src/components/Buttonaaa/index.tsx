import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import PaperButton from './styles';

interface Props {
  mode: any,
  children: React.ReactNode;
  [x: string]: any 
}

const Button = ({ mode, style, children, ...props }: Props) => (
  <PaperButton
    style={[
      style,
    ]}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

export default Button;
