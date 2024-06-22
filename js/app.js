function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    comprarTipo(tipoIngresso,quantidade);
    limpaQtd();
}

function comprarTipo(tipoIngresso, quantidade){
    let qtdIngresso = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);
    if (quantidade > qtdIngresso){
        alert(`Quantidade de Ingressos Indisponível! Quantidade de Ingressos Disponíveis Para ${tipoIngresso} são ${qtdIngresso}`);
    } else {
        qtdIngresso = qtdIngresso - quantidade;
        document.getElementById(`qtd-${tipoIngresso}`).textContent = qtdIngresso;
        alert('Compra Realizada com sucesso!');
    }
}

function limpaQtd(){
    document.getElementById('qtd').value = 0;
}