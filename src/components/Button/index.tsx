import React from 'react'

import {
    ButtonWrapper
} from './styles'

type ButtonProps = {
    type: string
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
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