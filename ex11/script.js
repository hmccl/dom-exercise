function adicionarItem() {
    // Seleciona os elementos do DOM
    var texto = document.getElementById("texto").value;
    var lista = document.getElementById("listaOrdenada");

    // Cria um novo item de lista
    var item = document.createElement("li");
    item.textContent = texto; // Adiciona o texto ao item

    // Adiciona o item à lista
    lista.appendChild(item);

    // Limpa a caixa de texto
    document.getElementById("texto").value = "";
}
