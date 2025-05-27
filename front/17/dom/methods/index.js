    const contenedor = document.getElementById('contenedor');
    const log = document.getElementById('log');

    function escribirLog(mensaje) {
      log.textContent += '\n' + mensaje;
    }

    function crearElemento() {
      const nuevo = document.createElement('p');
      nuevo.textContent = '🆕 Elemento creado';
      nuevo.className = 'item';
      nuevo.setAttribute('id', 'nuevo');
      contenedor.appendChild(nuevo);
      escribirLog('✔️ Se creó un nuevo elemento con ID "nuevo".');
    }

    function insertarAntes() {
      const otro = document.createElement('p');
      otro.textContent = '📌 Insertado antes del inicial';
      otro.className = 'item';
      contenedor.insertBefore(otro, document.getElementById('elemento-inicial'));
      escribirLog('📌 Se insertó un nuevo párrafo antes del inicial.');
    }

    function reemplazarElemento() {
      const reemplazo = document.createElement('p');
      reemplazo.textContent = '🔁 Reemplazo';
      reemplazo.className = 'item';
      const objetivo = document.getElementById('elemento-inicial');
      contenedor.replaceChild(reemplazo, objetivo);
      escribirLog('🔁 Se reemplazó el elemento inicial.');
    }

    function eliminarElemento() {
      const el = document.getElementById('nuevo');
      if (el) {
        contenedor.removeChild(el);
        escribirLog('❌ Se eliminó el elemento con ID "nuevo".');
      } else {
        escribirLog('⚠️ No se encontró el elemento con ID "nuevo".');
      }
    }

    function modificarTexto() {
      const inicial = contenedor.querySelector('.item');
      if (inicial) {
        inicial.textContent = '<b> textContent No interpreta HTML</b>';
        escribirLog('📝 textContent aplicado.');
        setTimeout(() => {
          inicial.innerHTML = '<b> innerHTML Sí interpreta HTML</b>';
          escribirLog('📝 innerHTML aplicado.');
        }, 2000);
      }
    }

    // Métodos separados de atributos:
    function verAtributo() {
      const el = contenedor.querySelector('.item');
      if (el) {
        const id = el.getAttribute('id');
        escribirLog(`🔍 ID obtenido con getAttribute: ${id}`);
      }
    }

    function agregarAtributo() {
      const el = contenedor.querySelector('.item');
      if (el) {
        el.setAttribute('data-curso', 'DOM');
        escribirLog('✅ Atributo "data-curso" agregado con valor "DOM".');
      }
    }

    function quitarAtributo() {
      const el = contenedor.querySelector('.item');
      if (el && el.hasAttribute('data-curso')) {
        el.removeAttribute('data-curso');
        escribirLog('❌ Atributo "data-curso" eliminado.');
      } else {
        escribirLog('⚠️ El elemento no tiene el atributo "data-curso".');
      }
    }