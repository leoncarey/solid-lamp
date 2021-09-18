import React from 'react'

import {
  RadioWrapper,
  RadioInput
} from './styles'

type RadioButtonProps = {
    labelText: string
    id: string,
    name?: string,
    className?: string,
    value?: string,
}

const RadioButton: React.FC<RadioButtonProps> = ({ labelText, id, ...props }) => {
  return (
        <RadioWrapper>
            <RadioInput type="radio" id={id} {...props} />
            <label htmlFor={id}>{labelText}</label>
        </RadioWrapper>
  )
}

export default RadioButton
