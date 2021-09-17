import React, { useState } from 'react'
import { useField } from 'formik'

import {
    InputWrapper,
    InputField
} from './styles'

type InputFieldProps = {
    type: string,
    name: string,
    value?: string,
    placeholder?: string,
    autocomplete?: string,
    labelText?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<any>) => void
    onBlur?: (e: React.FocusEvent<any>) => void
}

const FormControl: React.FC<InputFieldProps> = ({labelText, onChange, onBlur, onFocus, ...props}) => {
    const [field, meta, helpers] = useField(props)
    
    const {value} = meta
    let [focused, setFocused] = useState(false)

    const handleBlur = (e) => {
        setFocused(false)
        onBlur(e)
    }

    const handleFocus = (e) => {
        setFocused(true)
        onFocus && onFocus(e)
    }

    return (
        <InputWrapper
            className={focused || value !== '' ? 'field-focused' : ''}>
            {
                labelText &&
                <label>{labelText}</label>
            }

            <InputField
                { ...field }
                { ...props }
                onBlur={handleBlur}
                onFocus={handleFocus}
            />

            {
                meta.touched && meta.error ?
                <div id="feedback">{meta.error}</div> : null
            }
        </InputWrapper>
    )
}

export default FormControl