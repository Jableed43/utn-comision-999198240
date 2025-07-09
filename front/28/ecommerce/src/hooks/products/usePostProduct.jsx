import { useState } from "react";

function usePostProduct() {
    const [error, setError] = useState()

    const initialUrl = `https://66fddd7a6993693089566773.mockapi.io/api/products`

    const fetchProduct = async (formData) => {
        setError(null)
        //intentamos ejecutar nuestra logica
        try {
            // en este caso fetch utiliza solo GET
            const response = await fetch(initialUrl, {
                method: 'POST',
                headers: {
                    'Content-type': "application/json",
                },
                body: JSON.stringify(formData)
            })
            //validamos que no haya error en la consulta a la api
            if(!response.ok){
                //throw funciona como el retorno - finaliza la ejecucion
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const res = await response.json()
            console.log(res)
            return true;
            
        } catch (error) {
            console.error("Error fetching characters: ", error)
            setError(error)
        }
    }
    
    return { error, fetchProduct }
}


export default usePostProduct