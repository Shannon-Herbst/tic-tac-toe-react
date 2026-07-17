import { useEffect, useState } from "react";

const useSound = (url, options = {}) => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        if (!url) {
            console.warn("useSound called with no url");
            return;
        }

        const audio = new Audio(url);
        audio.volume = options.volume ?? 1;
        audio.preload = "auto"; 

        setSound(audio);

        return () => {
            audio.pause();
            audio.src = "";
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const play = () => {
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch((err) => {
                console.error("Playback failed:", err);
            });
        }
    };

    return play;
};

export default useSound;