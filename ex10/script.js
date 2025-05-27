function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacaoSelecionada = document.querySelector('input[name="operacao"]:checked').value;
    var resultado = 0;

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (operacaoSelecionada) {
            case "soma":
                resultado = num1 + num2;
                break;
            case "subtracao":
                resultado = num1 - num2;
                break;
            case "multiplicacao":
                resultado = num1 * num2;
                break;
            case "divisao":
                resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero!";
                break;
        }
        document.getElementById("resultado").textContent = resultado;
    } else {
        alert("Digite valores numéricos válidos!");
    }
}