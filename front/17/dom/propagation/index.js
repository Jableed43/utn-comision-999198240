    const externo = document.getElementById('div-externo');
    const interno = document.getElementById('div-interno');
    const consola = document.getElementById('consola');

    function log(texto) {
      consola.textContent += '\n' + texto;
    }

    // Bubbling (por defecto)
    externo.addEventListener('click', () => {
      log('➡️ Burbujeo: click en DIV EXTERNO');
    });

    interno.addEventListener('click', () => {
      log('➡️ Burbujeo: click en DIV INTERNO');
    });

    // Capturing (se activa con true)
    externo.addEventListener('click', () => {
      log('⬅️ Captura: click en DIV EXTERNO');
    }, true);

    // Evento con stopPropagation
    interno.addEventListener('click', (e) => {
      e.stopPropagation();
      log('🛑 Evento detenido en DIV INTERNO (stopPropagation)');
    });

    function limpiarLog() {
      consola.textContent = 'Log:';
    }