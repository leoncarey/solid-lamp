import styled from 'styled-components'

export const InputWrapper = styled.div`
    display: block;
    width: 100%;
    margin: 0 0 28px 0;
    width: 100%;
    height: 54px;
    padding: 0 18px;
    border: 1px solid ${props => props.theme.inputs.border_primary};
    background: ${props => props.theme.inputs.background_primary};
    border-radius: 12px;
    position: relative;

    label {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.33333333;
        position: absolute;
        top: 13px;
        left: 10px;
        background-color: ${props => props.theme.colors.white};
        transition: all .3s ease;
        display: block;
        padding: 2px 5px;
        border-radius: 5px;
        color: ${props => props.theme.inputs.placeholder_color}
    }

    &.field-focused {
        border-color: ${props => props.theme.colors.primary};

        label {
            font-size: 0.8rem;
            top: -10px;
        }
    }
`

export const InputField = styled.input`
    background: transparent;
    color: ${props => props.theme.inputs.colors};
    transition: border-color .2s ease-in-out;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.33333333;
    outline: none;
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 35px 0 18px;
`