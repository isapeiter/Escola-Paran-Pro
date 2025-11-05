        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
        
        // Se quiser detectar preferência do sistema:
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }