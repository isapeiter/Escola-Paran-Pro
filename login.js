    const toggle = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    toggle.addEventListener('click', () => {
      const type = password.type === 'password' ? 'text' : 'password';
      password.type = type;
    });


            const API_URL = 'http://localhost:3000';

        const loginForm = document.getElementById('loginForm');
        const messageDiv = document.getElementById('message');
        const userInfoDiv = document.getElementById('userInfo');
        const loginBtn = document.getElementById('loginBtn');

        // Verificar se já está logado
        window.addEventListener('load', () => {
            const user = localStorage.getItem('user');
            if (user) {
                showUserInfo(JSON.parse(user));
            }
        });

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email_escola = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            // Desabilitar botão durante o login
            loginBtn.disabled = true;
            loginBtn.textContent = 'Entrando...';

            try {
                const response = await fetch(`${API_URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email_escola, senha })
                });

                const data = await response.json();

                if (response.ok) {
                    // Login bem-sucedido
                    showMessage(data.message, 'success');
                    
                    // Salvar dados do usuário
                    localStorage.setItem('user', JSON.stringify(data.user));
                    
                    // Mostrar info do usuário
                    setTimeout(() => {
                        showUserInfo(data.user);
                    }, 1000);

                } else {
                    // Login falhou
                    showMessage(data.error, 'error');
                }

            } catch (error) {
                showMessage('Erro ao conectar com o servidor', 'error');
                console.error('Erro:', error);
            } finally {
                loginBtn.disabled = false;
                loginBtn.textContent = 'Entrar';
            }
        });

        function showMessage(text, type) {
            messageDiv.textContent = text;
            messageDiv.className = `message ${type} show`;
            
            setTimeout(() => {
                messageDiv.classList.remove('show');
            }, 5000);
        }

        function showUserInfo(user) {
            document.getElementById('userName').textContent = user.nome || 'Não informado';
            document.getElementById('userEmail').textContent = user.email;
            document.getElementById('userId').textContent = user.id;
            
            loginForm.style.display = 'none';
            userInfoDiv.classList.add('show');
        }

        function logout() {
            localStorage.removeItem('user');
            loginForm.style.display = 'block';
            userInfoDiv.classList.remove('show');
            messageDiv.classList.remove('show');
            loginForm.reset();
            showMessage('Logout realizado com sucesso!', 'success');
        }