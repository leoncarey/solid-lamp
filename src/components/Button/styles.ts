import styled from 'styled-components'

export const ButtonWrapper = styled.button`
    width: 100%;
    height: 54px;
    padding: 0 18px;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    min-height: 32px;
    line-height: 2.30769231;
    vertical-align: baseline;
    box-shadow: ${props => props.theme.buttons.box_color};
    background: ${props => props.theme.buttons.background};
    border-color: transparent;
    transition: background-color .2s ease-in-out;
    color: ${props => props.theme.colors.white};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.buttons.background_hover};
    }
`
