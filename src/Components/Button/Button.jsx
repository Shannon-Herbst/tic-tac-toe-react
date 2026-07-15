import React from 'react';
import { ButtonWrapper } from './Button.Styled';

function Button(props) {
  return (
    <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
  )
}

export default Button