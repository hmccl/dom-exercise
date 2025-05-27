let tamanhoFonte = 1.2; // Tamanho base

function aumentarTexto() {
    tamanhoFonte += .3;
    document.body.style.fontSize = tamanhoFonte + "rem";
}

function diminuirTexto() {
    tamanhoFonte -= .3;
    document.body.style.fontSize = tamanhoFonte + "rem";
}