import styled from "styled-components";

export const TimerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    min-height: 5rem;
`

export const TimerLabel = styled.p`
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    font-family: 'Courier-New', Courier, monospace;
    margin-bottom: 0.25rem;
`

export const TimerValue = styled.p`
    color: ${(props) => props.urgent ? props.theme.colors.red : props.theme.colors.text};
    font-size: 2.5rem;
    font-family: 'Courier-New', Courier, monospace;
    font-weight: 700;
    line-height: 1;
    transition: color 0.2s ease;
`

export const TimerBarTrack = styled.div`
    width: 12rem;
    height: 0.5rem;
    margin-top: 0.75rem;
    background-color: ${(props) => props.theme.colors.gray};
    overflow: hidden;
`

export const TimerBarFill = styled.div`
    height: 100%;
    width: ${(props) => props.percent}%;
    background-color: ${(props) => props.urgent ? props.theme.colors.red : props.theme.colors.yellow};
    transition: width 1s linear, background-color 0.2s ease;
`
