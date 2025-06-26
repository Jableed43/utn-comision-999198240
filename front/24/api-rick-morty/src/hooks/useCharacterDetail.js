// src/hooks/useCharacterDetail.js
import { useState, useEffect } from 'react';

const useCharacterDetail = (characterId) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Construimos la URL del endpoint específico para el personaje
  // Usamos la misma base de la API, pero quitando "/character" al final
  // y añadiendo el ID.
  const baseUrl = import.meta.env.VITE_RICK_AND_MORTY_API_URL.replace('/character', '');
  const characterUrl = `${baseUrl}/character/${characterId}`;

  useEffect(() => {
    // Si no hay ID, no intentamos hacer el fetch
    if (!characterId) {
      setError(new Error("No se proporcionó un ID de personaje."));
      setLoading(false);
      return;
    }

    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(characterUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - No se encontró el personaje.`);
        }
        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        console.error(`Error fetching character with ID ${characterId}:`, err);
        setError(err);
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [characterId, characterUrl]); // El fetch se re-ejecuta si el ID o la URL cambian

  return { character, loading, error };
};

export default useCharacterDetail;