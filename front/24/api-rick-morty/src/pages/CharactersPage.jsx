import React from 'react'
import useRickAndMortyApi from '../hooks/useRickAndMortyApi'
import Characters from '../components/Characters'
import Pagination from '../components/Pagination'

function CharactersPage() {
    //hook de la api para hacer el llamado y traer los datos
    const { characters, info, loading, error, onNext, onPrevious } = useRickAndMortyApi()

    //Necesitamos mostrar un estado de carga mientras se obtienen los datos
    if(loading){
        return (
            <>
                Cargando personajes...
            </>
        )
    }

    //Necesitamos mostrar un mensaje de error si algo sale mal
    if(error){
        return (
            <>
            <h2>Error al cargar los datos</h2>
            <p> {error.message} </p>
            </>
        )
    }

  return (
    <div className='container mx-auto px-4 mt-5' >
        <Pagination next={info.next} prev={info.prev} onNext={onNext} onPrevious={onPrevious} />

        <Characters characters={characters} />

        <Pagination next={info.next} prev={info.prev} onNext={onNext} onPrevious={onPrevious} />
    </div>
  )
}

export default CharactersPage