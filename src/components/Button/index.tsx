import React from 'react'

import {
  ButtonWrapper
} from './styles'

type ButtonProps = {
    type?: 'submit' | 'button',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
        <ButtonWrapper {...props}>
            {children}
        </ButtonWrapper>
  )
}

Button.defaultProps = {
  type: 'button'
}

export default Button
