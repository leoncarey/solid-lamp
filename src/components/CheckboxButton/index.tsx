import React from 'react'
import { FcCheckmark } from "react-icons/fc";

import {
    CheckboxWrapper,
    CheckboxInput
} from './styles'

type CheckboxButtonProps = {
    labelText: string
    id: string,
    name?: string,
    className?: string,
    value?: boolean,
    display?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({labelText, id, display, ...props}) => {
    return (
        <CheckboxWrapper className={`checkbox-${display}`}>
            <CheckboxInput type="checkbox" id={id} {...props} />
            <label htmlFor={id}>
                <FcCheckmark className="check-icon" />
                {labelText}
            </label>
        </CheckboxWrapper>
    )
}

CheckboxButton.defaultProps = {
    display: 'row'
}

export default CheckboxButton