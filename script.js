function verificaVelocidade() {
    var inVelocidadePermitida = document.getElementById('velocidadePermitida')
    var inVelocidadeCondutor = document.getElementById('velocidadeCondutor')
    var outSituacao = document.getElementById('outSituacao')

    var veloPermitida = Number(inVelocidadePermitida.value)
    var veloCondutor = Number(inVelocidadeCondutor.value)
    var resposta = ""

    if (isNaN(veloPermitida) || isNaN(veloCondutor)) {
        alert("Informe uma velocidade válida!")
        inNumero.focus()
        return
    } else if (veloCondutor <= veloPermitida) {
        resposta = "SEM MULTA"
        outSituacao.textContent = "Situação: " + resposta

    } else if (veloCondutor > (veloPermitida * 1.2)) {
        resposta = "MULTA GRAVE"
        outSituacao.textContent = "Situação: " + resposta
    } else {
        resposta = "MULTA LEVE"
        outSituacao.textContent = "Situação: " + resposta
    }
}


var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificaVelocidade)