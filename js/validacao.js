function verificaValorValido(chute) {
    const numero = +chute

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido<div>'
    }

    if (numeroMaiorMenorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>    
        `
    }
    else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>    
        `
    }
}

function numeroMaiorMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}