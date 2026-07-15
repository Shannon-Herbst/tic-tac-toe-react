import {createGlobalStyle, CreateGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
       margin: 0;
       padding: 0;
       box-sizing: border-box; 
       ${(props) => props.theme.media.mobile} {
        font-size: 12px;
        
       }
    }

    body{
        background-colour: ${props => props.theme.colors.primary};
    }
`