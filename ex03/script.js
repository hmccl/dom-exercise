function contarParagrafos() {
    const divOrigem = document.getElementById('origem');
    const paragrafos = divOrigem.getElementsByTagName('p');
    const total = paragrafos.length;

    document.getElementById('resultado').innerText = `Número de parágrafos: ${total}`;
}