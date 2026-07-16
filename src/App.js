import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GlobalStyle } from "./styles/Global.Styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={mode}>
        <ModalContextProvider>
          <GlobalStyle />
          <Router />
        </ModalContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;