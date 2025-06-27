import { useEffect, useState } from "react";

const useCharacterDetail = (characterId) => {
        const [character, setCharacter] = useState(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)

        const baseUrl = import.meta.env.VITE_RICK_AND_MORTY_API_URL
        const characterUrl = `${baseUrl}/${characterId}`

        useEffect(() => {
            if(!characterId){
                setError(new Error("No se proporcionó un ID de personaje"))
                setLoading(false)
                return;
            }
            const fetchCharacter = async () => {
                setLoading(true);
                setError(null);
                try {
                    //fetch expandido
                    // const response = await fetch(characterUrl)
                   const response = await fetch(characterUrl, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    if(!response.ok) {
                        throw new Error(`Http error! status: ${response.status} - No se encontró el personaje`)
    
                    }
                    const data = await response.json()
                    setCharacter(data)
                } catch (error) {
                    console.error(`Error recuperando el personaje con el ID ${characterId}`)
                    setError(error)
                    setCharacter(null)
                } finally {
                    setLoading(false)
                }
            }
    
            fetchCharacter()
        }, [characterId, characterUrl])
        return { character, loading, error }
}

export default useCharacterDetail;