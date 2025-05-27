// --- Funções para getElementById ---
function alterarTitulo() {
    // Seleciona o elemento h3 com o ID 'titulo'
    const titulo = document.getElementById('titulo');
    // Altera o texto e a cor
    titulo.textContent = 'Título Alterado via ID!';
    titulo.style.color = '#dc3545'; // Vermelho
}

function alterarParagrafo() {
    // Seleciona o elemento p com o ID 'paragrafoDescricao'
    const paragrafo = document.getElementById('paragrafoDescricao');
    // Altera o texto e adiciona uma borda
    paragrafo.textContent = 'O conteúdo deste parágrafo foi modificado com sucesso!';
    paragrafo.style.border = '2px dashed #28a745'; // Verde
    paragrafo.style.backgroundColor = '#d4edda'; // Verde claro
}

// --- Funções para getElementsByTagName ---
function alterarTodosParagrafos() {
    // Seleciona todos os elementos <p> na página
    const todosParagrafos = document.getElementsByTagName('p');

    // Itera sobre a coleção e altera o texto de cada um
    for (let i = 0; i < todosParagrafos.length; i++) {
        todosParagrafos[i].textContent = 'Parágrafo alterado por tag!';
        todosParagrafos[i].style.fontStyle = 'italic';
        todosParagrafos[i].style.color = '#6c757d'; // Cinza
    }
}

function destacarTodosItensLista() {
    // Seleciona todos os elementos <li> na página
    const itensLista = document.getElementsByTagName('li');

    // Itera sobre a coleção e adiciona uma classe CSS a cada um
    for (let i = 0; i < itensLista.length; i++) {
        itensLista[i].style.fontWeight = 'bold';
    }
}
