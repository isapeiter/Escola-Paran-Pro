    const toggleButton = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');

    toggleButton.addEventListener('click', function() {
      // Alterna o tipo do input
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      
      // Alterna o ícone
      if (type === 'password') {
        toggleIcon.textContent = 'visibility';
      } else {
        toggleIcon.textContent = 'visibility_off';
      }
    });