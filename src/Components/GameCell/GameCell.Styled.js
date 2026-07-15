import styled from "styled-components";

export const CellStyle = styled.button`
    background-color: ${(props)=> props.theme.colors.secondary};
    color: ${(props)=> props.theme.colors.primary};
    font-size: 3rem;
    width: 10rem;
    height: 10rem;
    border: none;
    border-radius: none;
    box-shadow: 5px 10px #888886;
    cursor: pointer;
`