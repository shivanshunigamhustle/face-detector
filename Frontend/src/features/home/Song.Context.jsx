import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [song, setSong] = useState({
        "url": "https://ik.imagekit.io/cs9tebskb/cohort-2/moodify/songs/Ye_Bikhra_Hai_…",
"posterUrl":
"https://ik.imagekit.io/cs9tebskb/cohort-2/moodify/posters/Ye_Bikhra_Ha…",
"title": "Ye Bikhra Hai Saaman [DOWNLOAD MING]",
"mood":
"happy"
    })

    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider
            value={{ loading, setLoading, song, setSong }}
        >
            {children}
        </SongContext.Provider>
    )

}