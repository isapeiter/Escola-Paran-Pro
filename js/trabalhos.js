  // Dark mode automático
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
    }

    // Filtro de cartões
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;

        cards.forEach(card => {
          card.style.display =
            filter === 'todos' || card.dataset.status === filter ? 'flex' : 'none';
        });
      });
    });