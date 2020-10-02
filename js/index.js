function visor(valor) {
    document.getElementById('resultado').value += valor;
}

function limpar() {
    document.getElementById('resultado').value = '';
}

function resolver() {
    const conta = document.getElementById('resultado').value;
    const resultado = eval(conta);
    document.getElementById('resultado').value = resultado
    console.log(conta)
}