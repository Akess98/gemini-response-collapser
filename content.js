function addCollapseButtons() {
  // <model-response> è il tag nativo fisso che Google usa per racchiudere ogni risposta dell'IA
  const modelResponses = document.querySelectorAll('model-response');

  modelResponses.forEach(response => {
    // Se la risposta ha già il pulsante iniettato, saltiamo
    if (response.querySelector('.collapse-btn')) return;

    // Crea un unico pulsante tondo minimale internazionale
    const btn = document.createElement('button');
    btn.innerText = '🔼';
    btn.className = 'collapse-btn';
    btn.title = 'Collapse/Expand';

    // Al click, nascondiamo o mostriamo l'intero contenuto interno di <model-response>
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Cerchiamo i contenitori interni del testo di Gemini (i blocchi markdown o i testi)
      const contentBlocks = response.querySelectorAll('g-markdown, .message-content, message-content');
      
      let isHidden = false;
      contentBlocks.forEach(block => {
        block.classList.toggle('hidden-response-content');
        isHidden = block.classList.contains('hidden-response-content');
      });
      
      // Aggiorna l'icona in base allo stato
      btn.innerText = isHidden ? '🔽' : '🔼';
    });

    // Inserisce il pulsante esattamente in cima alla risposta dell'IA
    response.insertBefore(btn, response.firstChild);
  });
}

// Inizializzazione sicura dell'Observer
if (document.body) {
  initObserver();
} else {
  document.addEventListener('DOMContentLoaded', initObserver);
}

function initObserver() {
  addCollapseButtons();
  const observer = new MutationObserver(() => addCollapseButtons());
  observer.observe(document.body, { childList: true, subtree: true });
}
