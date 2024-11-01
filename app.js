function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroDe = parseInt(document.getElementById('de').value);
    let numeroAte = parseInt(document.getElementById('ate').value);

    if (numeroDe>= numeroAte) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    
    if(quantidade > (numeroAte - numeroDe + 1)){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    if(numeroDe >= numeroAte){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numeros;

    for (let i = 0; i < quantidade; i++){
        numeros = obterNumeroAleatorio(numeroDe, numeroAte);
        while(sorteados.includes(numeros)){
            numeros = obterNumeroAleatorio(numeroDe, numeroAte);
        }
        sorteados.push(numeros);
        
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

    alteraStatusDoBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alteraStatusDoBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alteraStatusDoBotao();
}

