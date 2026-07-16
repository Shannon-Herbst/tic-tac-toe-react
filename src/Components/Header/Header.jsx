import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.Styled';
import { ReactComponent as Logo} from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { SoundEffectContext } from '../../contexts/SoundEffectsContexts';

function Header() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const { hoverSfx } = useContext(SoundEffectContext);
    const navigate = useNavigate();
  return (
    <HeaderWrapper>
        <Logo className="logo" onClick={()=> navigate("/")} onMouseEnter={() => hoverSfx()}/>

        <span onMouseEnter={() => hoverSfx()} onClick={() => toggleTheme()}>{theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}</span>

        {/* <button onClick={() => toggleTheme}>Toggle Theme</button> */}
        
    </HeaderWrapper>
  )
}

export default Header