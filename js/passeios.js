        // Toggle dark mode
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
        
        // Detectar preferência do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }

        // Sistema de filtros
        const filterButtons = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.card');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona active ao botão clicado
                this.classList.add('active');
                
                // Filtra os cards
                const filter = this.dataset.filter;
                
                cards.forEach(card => {
                    if (filter === 'todos') {
                        card.style.display = 'flex';
                    } else {
                        if (card.dataset.status === filter) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });