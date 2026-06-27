// --- LÓGICA DO MODAL "SOBRE MIM" (SEU CÓDIGO ORIGINAL) ---

// Ao clicar no link "Sobre mim", o modal abre com display: flex
document.getElementById('sobre-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('sobre-modal').style.display = 'flex';
    
    // Adicionei esta linha para impedir o scroll da página ao abrir o modal
    document.body.style.overflow = 'hidden'; 
});

// Ao clicar no botão de fechar dentro do modal, ele fecha com display: none
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('sobre-modal').style.display = 'none';
    
    // Adicionei esta linha para liberar o scroll da página ao fechar o modal
    // (Apenas se o menu mobile também não estiver aberto)
    if (!document.getElementById('menu').classList.contains('active')) {
        document.body.style.overflow = '';
    }
});

// Ao clicar fora do conteúdo do modal, ele fecha
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('sobre-modal')) {
        document.getElementById('sobre-modal').style.display = 'none';
        
        // Adicionei esta linha para liberar o scroll da página ao fechar o modal
        // (Apenas se o menu mobile também não estiver aberto)
        if (!document.getElementById('menu').classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }
});


// --- LÓGICA DO MENU HAMBÚRGUER (ADICIONADA PARA O MOBILE) ---

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-item');

// Função global para fechar o menu e o overlay
function closeMenuGlobal() {
    if (hamburger && menu && menuOverlay) {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        menuOverlay.classList.remove('active');
        
        // Remove a trava de scroll APENAS se o modal também não estiver aberto
        const modal = document.getElementById('sobre-modal');
        if (modal && modal.style.display !== 'flex') {
            document.body.style.overflow = '';
        }
    }
}

// Função para alternar (abrir/fechar) o menu hambúrguer
function toggleMenu() {
    if (hamburger && menu && menuOverlay) {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        // Alterna a trava de scroll do body
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // Impede scroll
        } else {
            // Remove a trava de scroll se o modal também não estiver aberto
            const modal = document.getElementById('sobre-modal');
            if (modal && modal.style.display !== 'flex') {
                document.body.style.overflow = '';
            }
        }
    }
}

// Eventos de clique para o hambúrguer e o overlay
if (hamburger) { hamburger.addEventListener('click', toggleMenu); }
if (menuOverlay) { menuOverlay.addEventListener('click', closeMenuGlobal); }

// Fecha o menu mobile quando qualquer link dele é clicado
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Só executa a lógica se o menu estiver aberto
        if (menu && menu.classList.contains('active')) {
            // Pequeno delay para a navegação suave/modal abrir antes de fechar o menu
            setTimeout(closeMenuGlobal, 100);
        }
    });
});
