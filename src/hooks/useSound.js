import { useEffect, useState } from "react"

const useSound = (url, sounds) => {
    const [sound, setSound] = useState(false);
    useEffect(() => {
        const audio = new Audio(url);

        audio.load()

        setSound(audio)

    }, [])

    return () => {
        if(sound) {
            sound.play();
        }
    }

}

export default useSound