import { useEffect, useState } from "react"

const useRickAndMortyApi = () => {
    //Estados
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //consumimos nuestra variable de entorno
    const initialUrl = import.meta.env.VITE_RICK_AND_MORTY_API_URL

    // fetch (asincronismo) -> funcion que permite utilizar HTTP
    // reemplazos de fetch -> axios, reactQuery

    const fetchCharacters = async (url) => {
        setLoading(true)
        setError(null)
        //intentamos ejecutar nuestra logica
        try {
            // en este caso fetch utiliza solo GET
            const response = await fetch(url)
            //validamos que no haya error en la consulta a la api
            if(!response.ok){
                //throw funciona como el retorno - finaliza la ejecucion
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // en data obtendremos los datos del json pero en js (como array y objetos)
            const data = await response.json()
            setCharacters(data.results)
            setInfo(data.info)
        } catch (error) {
            console.error("Error fetching characters: ", error)
            setError(error)
            setCharacters([])
            setInfo({})
        } finally {
            setLoading(false)
        }
    }

    //Necesitamos tener un llamado a la api con un fetch inicial
    //si no manejamos bien la ejecucion podriamos tener un bucle infinito

    useEffect(() => {
        if(initialUrl) {
            fetchCharacters(initialUrl)
        } else {
            setError(new Error("El env que contiene el enlace a la api no esta definido en las variables de entorno"))
            setLoading(false)
        }
    }, [initialUrl])

    //Manejar la paginacion
    const onPrevious = () => {
        if(info.prev){
            fetchCharacters(info.prev)
        }
    }

    const onNext = () => {
        if(info.next){
            fetchCharacters(info.next)
        }
    }

    return {
        characters,
        info,
        loading,
        error,
        onPrevious,
        onNext,
    }

}

export default useRickAndMortyApi;
