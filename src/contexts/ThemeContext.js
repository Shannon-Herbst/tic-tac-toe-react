import { createContext, useState } from "react";
import React from 'react'

export const ThemeContext = createContext({})


export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
  return (
    <div>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

