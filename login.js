    const toggleButton = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');

    toggleButton.addEventListener('click', function() {
      
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
    
      if (type === 'password') {
        toggleIcon.textContent = 'visibility';
      } else {
        toggleIcon.textContent = 'visibility_off';
      }
    });

    const MudarTela = document.getElementById('btn-primary');


