import { useState, useEffect } from 'react';
import './LikeCounter.css';

const LikeCounter = () => {
  const [likeCounter, setLikeCounter] = useState(0);

  // Función para cargar "me gusta" desde localStorage
  const loadLikes = () => {
    const savedCount = localStorage.getItem('myLikeCount');
    if (savedCount !== null && !isNaN(savedCount)) {
      setLikeCounter(parseInt(savedCount));
    }
  };

  // Función para guardar "me gusta" en localStorage
  const saveLikes = (count) => {
    localStorage.setItem('myLikeCount', count);
  };

  // Cargar likes al montar el componente
  useEffect(() => {
    loadLikes();
  }, []);

  // Manejar el clic del botón
  const handleLikeClick = () => {
    const newCount = likeCounter + 1;
    setLikeCounter(newCount);
    saveLikes(newCount);
    
    // Efecto "pop" - añadir clase temporalmente
    const likeCountElement = document.getElementById('likeCount');
    if (likeCountElement) {
      likeCountElement.classList.add('pop');
      setTimeout(() => {
        likeCountElement.classList.remove('pop');
      }, 200);
    }
    
    // Mostrar en consola para depurar
    console.log('Me gusta:', newCount);
  };

  return (
    <div className="like-container">
      <h1>¡Dale "Me Gusta"!</h1>
      <div className="like-area">
        <i 
          className="fas fa-heart like-button" 
          id="likeButton"
          onClick={handleLikeClick}
        ></i>
        <span className="like-count" id="likeCount">
          {likeCounter}
        </span>
      </div>
      <p>Haz clic en el corazón para aumentar el contador.</p>
    </div>
  );
};

export default LikeCounter;
