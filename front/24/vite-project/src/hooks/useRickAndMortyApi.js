// src/hooks/useRickAndMortyApi.js
import { useState, useEffect } from 'react'; // Eliminamos useCallback

const useRickAndMortyApi = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initialUrl = import.meta.env.VITE_RICK_AND_MORTY_API_URL;

  // fetchCharacters ya no usa useCallback
  const fetchCharacters = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (err) {
      console.error("Error fetching characters:", err);
      setError(err);
      setCharacters([]);
      setInfo({});
    } finally {
      setLoading(false);
    }
  };

  // useEffect para realizar el fetch inicial.
  // Aquí la dependencia de fetchCharacters funciona bien porque no causa un bucle infinito.
  useEffect(() => {
    if (initialUrl) {
      fetchCharacters(initialUrl);
    } else {
      setError(new Error("VITE_RICK_AND_MORTY_API_URL no está definida en las variables de entorno."));
      setLoading(false);
    }
  }, [initialUrl]); // Ahora solo depende de initialUrl, ya que fetchCharacters no cambia su referencia en cada render.

  // onPrevious ya no usa useCallback
  const onPrevious = () => {
    if (info.prev) {
      fetchCharacters(info.prev);
    }
  };

  // onNext ya no usa useCallback
  const onNext = () => {
    if (info.next) {
      fetchCharacters(info.next);
    }
  };

  return {
    characters,
    info,
    loading,
    error,
    onPrevious,
    onNext,
  };
};

export default useRickAndMortyApi;
