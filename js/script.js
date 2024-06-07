// Alterna a visibilidade da seção "Sobre Mim" e rola a tela até a seção
document.getElementById('quem-sou-eu').addEventListener('click', function() {
    document.getElementById('conteudo').classList.toggle('hidden');
    document.getElementById('conteudo').scrollIntoView({ behavior: 'smooth' });
});

// Fecha a seção "Conteúdo" e rola a tela até a seção "Sobre Mim"
document.getElementById('triangle-bottom').addEventListener('click', function() {
    document.getElementById('conteudo').classList.add('hidden');
    document.getElementById('sobre-mim').scrollIntoView({ behavior: 'smooth' });
});

// Navega para a seção "Sobre Mim" e destaca o item de navegação ativo
document.getElementById('link-sobre-mim').addEventListener('click', function() {
    document.querySelector('li.active').classList.remove('active');
    this.classList.add('active');
    document.getElementById('sobre-mim').classList.remove('hidden');
    document.getElementById('projetos-academicos').classList.add('hidden');
    document.getElementById('conteudo').classList.add('hidden');
    document.getElementById('sobre-mim').scrollIntoView({ behavior: 'smooth' });
});

// Navega para a seção "Projetos Acadêmicos" e destaca o item de navegação ativo
document.getElementById('link-projetos-academicos').addEventListener('click', function() {
    document.querySelector('li.active').classList.remove('active');
    this.classList.add('active');
    document.getElementById('sobre-mim').classList.add('hidden');
    document.getElementById('projetos-academicos').classList.remove('hidden');
    document.getElementById('projetos-academicos').scrollIntoView({ behavior: 'smooth' });
});

// Rola a tela até o topo ao clicar no triângulo
document.getElementById('triangle-up').addEventListener('click', function() {
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
});


// Adiciona evento de clique aos botões dos projetos
document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
