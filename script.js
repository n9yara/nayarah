// Obter os elementos do DOM
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');

// Função para revelar o conteúdo ao clicar em qualquer lugar da tela
overlay.addEventListener('click', function() {
    // Esconder o overlay e mostrar o conteúdo
    overlay.style.display = 'none';
    content.style.display = 'block';
});