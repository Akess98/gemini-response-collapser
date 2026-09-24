// Verifica di essere effettivamente sul sito di Gemini prima di procedere
if (window.location.hostname.includes('://google.com')) {

  // Funzione per aggiungere il pulsante alle risposte
  function addCollapseButtons() {
    // Selettori per intercettare i blocchi di risposta di Gemini
    const responses = document.querySelectorAll('message-content, .message-content, [data-side="bot"]');

    responses.forEach(response => {
      if (response.parentElement.querySelector('.collapse-btn')) return;

      const btn = document.createElement('button');
      btn.innerText = '🔼'; // Solo l'emoji iniziale
      btn.className = 'collapse-btn';
      btn.title = 'Collapse/Expand'; // Tooltip universale al passaggio del mouse

      btn.addEventListener('click', () => {
        response.classList.toggle('hidden-response-content');
        if (response.classList.contains('hidden-response-content')) {
          btn.innerText = '🔽';
        } else {
          btn.innerText = '🔼';
        }
      });

      response.parentNode.insertBefore(btn, response);
    });
  }

  // Monitora il caricamento dinamico della chat
  const observer = new MutationObserver(() => {
    addCollapseButtons();
  });

  observer.observe(document.body, { childList: true, subtree: true });
  addCollapseButtons();
}
