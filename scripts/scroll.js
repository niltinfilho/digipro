// Controle de animação do header durante a rolagem
const header = document.querySelector('header');
let lastScrollTop = 0;
let scrollThreshold = 100; // Limite para considerar a rolagem significativa

window.addEventListener('scroll', function () {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Adiciona classe 'scrolled' quando a página é rolada para baixo
  if (currentScrollTop > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Esconde o header quando rola para baixo e mostra quando rola para cima
  if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
    // Rolando para baixo
    header.classList.add('hidden');
  } else {
    // Rolando para cima
    header.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;

  // Destaca o item de menu ativo com base na seção visível
  highlightActiveMenuItem();
});

// Função para destacar o item de menu ativo
function highlightActiveMenuItem() {
  // Obtém todas as seções
  const sections = document.querySelectorAll('section[id]');

  // Determina qual seção está visível na tela
  let activeSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.pageYOffset;

    // Verifica se a seção está visível na tela
    if (scrollPosition >= sectionTop - 200 &&
      scrollPosition < sectionTop + sectionHeight - 200) {
      activeSection = '#' + section.getAttribute('id');
    }
  });

  // Remove a classe 'text-primary' de todos os links do menu
  menuLinks.forEach(link => {
    link.classList.remove('text-primary');
    link.classList.add('hover:text-primary');
  });

  // Adiciona a classe 'text-primary' ao link ativo
  if (activeSection) {
    const activeLink = document.querySelector(`a[href="${activeSection}"]`);
    if (activeLink) {
      activeLink.classList.add('text-primary');

      // Adiciona um efeito visual ao link ativo
      const activeLinkRect = activeLink.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();

      // Cria um efeito de pulso no link ativo
      if (!activeLink.querySelector('.pulse-effect')) {
        const pulseEffect = document.createElement('span');
        pulseEffect.classList.add('pulse-effect');
        pulseEffect.style.cssText = `
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  background-color: rgba(0, 229, 255, 0.5);
                  top: 50%;
                  left: -15px;
                  transform: translateY(-50%);
                  animation: pulse 1.5s infinite;
              `;
        activeLink.appendChild(pulseEffect);
      }
    }
  }
}

highlightActiveMenuItem();