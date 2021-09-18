import styled from 'styled-components'

export const CheckboxWrapper = styled.div`
    margin: 0 0 28px 0;
    width: fit-content;
    justify-content: space-between;
    flex-direction: row;

    input[type="checkbox"] {
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: -1000px;
        opacity: 1;
    }

    label {
        color: #3e3f5e;
        font-size: 0.85rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;

        &::before {
            content: '';
            width: 22px;
            height: 22px;
            margin-right: 10px;
            display: block;
            border: 1px solid #dedeea;
            border-radius: 6px;
            background: ${props => props.theme.colors.white};
        }

        .check-icon {
            opacity: 0;
            position: absolute;
            transition: opacity .3s ease;
            position: absolute;
            left: 3px;
            top: 1px;
            font-size: 1.2rem;
        }
    }

    input[type="checkbox"]:checked + label .check-icon {
        opacity: 1;
    }
`

type CheckboxProps = {
    type: 'checkbox'
}

export const CheckboxInput = styled.input<CheckboxProps>`
    box-shadow: none;
    border-color: #23d2e2;
`
