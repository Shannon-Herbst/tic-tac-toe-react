import { createContext } from "react";
import React from 'react'
import useSound from "../hooks/useSound";

export const SoundEffectContext = createContext({})


export function SoundEffectContextProvider({children}) {

    const options = {
        volume: 0.05
    }

    const hoverPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
    const hoverSfx = useSound(hoverPath, options)
      
  return (
    <div>
        <SoundEffectContext.Provider value={{ hoverSfx }}>
            {children}
        </SoundEffectContext.Provider>
    </div>
  )
}

