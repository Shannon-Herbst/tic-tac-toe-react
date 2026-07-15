import styled from "styled-components";

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: 3rem;
    font-family: 'Courier-New', Courier, monospace;
`

export const Subtitle = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-family: 'Courier-New', Courier, monospace;
    background-color: transparent;
    font-weight: 200;
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 100vw;
    background-color: ${(props)=> props.theme.colors.primary};
    padding: 0 2rem;
    text-align: center;
`