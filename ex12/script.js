function adicionarItem() {
    var texto = document.getElementById("texto").value;
    var lista = document.getElementById("listaSelect");

    if (texto.trim() !== "") {
        var opcao = document.createElement("option");
        opcao.textContent = texto;
        opcao.value = texto; // Define o valor da opção
        lista.appendChild(opcao);
        document.getElementById("texto").value = ""; // Limpa a caixa de texto
    } else {
        alert("Digite um valor antes de adicionar!");
    }
}
