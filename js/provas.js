function showSection(id) {
  // Oculta todas as seções
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));

  // Exibe apenas a selecionada
  document.getElementById(id + '-section').classList.remove('hidden');
}

// Verifica se há provas realizadas ao carregar
document.addEventListener('DOMContentLoaded', () => {
  const realizadas = document.querySelectorAll('#realizadas-section .exam-card');
  const emptyState = document.getElementById('empty-realizadas');

  // Se não houver provas realizadas, mostra o estado vazio
  if (realizadas.length === 0 && emptyState) {
    emptyState.classList.remove('hidden');
  }
});
