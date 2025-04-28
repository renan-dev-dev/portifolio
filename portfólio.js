document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Opcional: Atualizar o hash na URL
                window.history.pushState(null, null, targetId);

                // Opcional: Remover a classe 'active' de todos os links e adicionar ao clicado
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Opcional: Manter o link ativo com base na seção visível (se você já tiver essa lógica)
    function activeMenu() {
        const sections = document.querySelectorAll('section');
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50; // Ajuste o valor conforme necessário
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector('header nav a[href*="' + sectionId + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', activeMenu);
});



// Adicionar ao seu arquivo portfólio.js

document.addEventListener('DOMContentLoaded', function() {
    // Criar o botão de menu hamburger
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    
    // Criar o botão do menu mobile
    const menuButton = document.createElement('div');
    menuButton.classList.add('menu-btn');
    menuButton.innerHTML = '<i class="bx bx-menu"></i>';
    header.insertBefore(menuButton, navbar);
    
    // Adicionar evento de clique
    menuButton.addEventListener('click', function() {
      navbar.classList.toggle('active');
      menuButton.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um item
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuButton.classList.remove('active');
      });
    });
  });



  // portfólio.js

// Função que verifica se a URL tem "message=ok" e mostra um alerta
function verificarMensagemDeEnvio() {
    const url = new URL(window.location.href);
    const mensagem = url.searchParams.get("message");
  
    if (mensagem === "ok") {
      // Cria um alerta de sucesso
      alert("Mensagem enviada com sucesso! ✅");
  
      // Remove o parâmetro da URL depois de mostrar
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
  
  // Executa a função assim que a página carregar
  window.onload = verificarMensagemDeEnvio;
  



