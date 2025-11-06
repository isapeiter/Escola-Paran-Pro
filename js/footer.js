// Define o item ativo automaticamente conforme a URL
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  if (item.href === window.location.href) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});
