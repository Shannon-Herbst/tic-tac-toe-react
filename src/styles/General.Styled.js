import styled from "styled-components";

export const Title = styled.h1`
    color: ${(props) => props.primary ? props.theme.colors.secondary : props.theme.colors.text};
    font-size: 3rem;
    font-family: 'Courier-New', Courier, monospace;
`

export const Subtitle = styled.h1`
    color: ${(props) => props.primary ? props.theme.colors.secondary : props.theme.colors.text};
    font-size: 1.5rem;
    font-family: 'Courier-New', Courier, monospace;
    background-color: transparent;
    font-weight: 200;
`

export const Text = styled.p`
    color: ${(props) => props.primary ? props.theme.colors.secondary : props.theme.colors.text};
    font-size: 1.2rem;
    font-family: 'Courier-New', Courier, monospace;
    background-color: transparent;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => props.columnBased ? "column" : "row"};
    height: 80vh;
    width: 100vw;
    background-color: ${(props)=> props.theme.colors.primary};
    padding: 0 2rem;
    text-align: center;

    ${(props) => props.theme.media.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`