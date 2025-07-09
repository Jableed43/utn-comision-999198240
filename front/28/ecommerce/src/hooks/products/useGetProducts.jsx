import { useEffect, useState } from "react";

function useGetProducts() {
    const [products, setProducts] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    const initialUrl = `https://66fddd7a6993693089566773.mockapi.io/api/products`

    const fetchProducts = async (url) => {
        setLoading(true)
        setError(null)
        //intentamos ejecutar nuestra logica
        try {
            // en este caso fetch utiliza solo GET
            const response = await fetch(url)
            console.log({response})
            //validamos que no haya error en la consulta a la api
            if(!response.ok){
                //throw funciona como el retorno - finaliza la ejecucion
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // en data obtendremos los datos del json pero en js (como array y objetos)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error("Error fetching characters: ", error)
            setError(error)
            setProducts([])
        } finally {
            setLoading(false)
        }
    }

    //Necesitamos tener un llamado a la api con un fetch inicial
    //si no manejamos bien la ejecucion podriamos tener un bucle infinito

    useEffect(() => {
        if(initialUrl) {
            fetchProducts(initialUrl)
        } else {
            setError(new Error("La url de la api es incorrecta"))
            setLoading(false)
        }
    }, [initialUrl])
    
    return { products, error, loading }
}

export default useGetProducts