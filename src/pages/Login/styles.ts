import styled from 'styled-components'
import mediaComponent from '../../styles/media-queries'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const SideRight = styled.section`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 250px;

    h1 {
        text-align: center;
        margin: 0;
        display: block;
    }

    h2 {
        text-align: center;
        margin: 30px 0 60px;
        font-weight: 900;
    }

    .forgot-password {
        margin: 30px 0;
        text-align: center;
        font-size: 0.85rem;
        font-weight: 900;
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};

        &:hover {
            color: ${props => props.theme.colors.hover_link_1};
        }
    }

    .go-back-home {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-top: 50px;
        width: fit-content;

        span {
            margin-left: 5px;
            transition: all .3s ease;
            font-size: 0.85rem;
            font-weight: 800;
            color: ${props => props.theme.colors.hover_link_2};
        }

        &:hover span {
            color: ${props => props.theme.colors.hover_link_1};
        }
    }

    ${mediaComponent('mobile', `
        width: 100%;
        padding: 0 40px;   
   `)}
`
