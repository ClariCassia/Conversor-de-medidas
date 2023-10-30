const btnConverter = document.querySelector('.btn-converter')
const mensagemErro = document.querySelectorAll('span')
const unidades = document.querySelectorAll('.unidade')
const campos = document.querySelectorAll('input, select')
const inputs = document.querySelectorAll('select')
const mensa = document.getElementById('mensagem-resultado')

function converterMedidas(unidadeEntrada, unidadeSaida, valorEntrada) {

    let unidade;

    switch (unidadeEntrada) {
        case "Metro(s)":
            unidade = valorEntrada;
            break;
        case "Quilomêtro(s)":
            unidade = valorEntrada * 1000;
            break;
        case "Centimetro(s)":
            unidade = valorEntrada / 100;
            break;
        case "Milimetro(s)":
            unidade = valorEntrada / 1000;
            break;
    }

    let resultado;

    switch (unidadeSaida) {
        case "Metro(s)":
            resultado = unidade;
            break;
        case "Quilomêtro(s)":
            resultado = unidade / 1000;
            break;
        case "Centimetro(s)":
            resultado = unidade * 100;
            break;
        case "Milimetro(s)":
            resultado = unidade * 1000;
            break;
    }

    exibeResultado(valorEntrada, unidadeEntrada, resultado, unidadeSaida)
}

const verificaInputs = () => {
    let camposPreenchidos = true
    campos.forEach((item, index) => {
        if (item.value === '' || item.value === 'unidade-original') {
            mensagemErro[index].classList.add('mensagem-erro-visivel')
            camposPreenchidos = false
        } else {
            mensagemErro[index].classList.remove('mensagem-erro-visivel')
        }
    })

    return camposPreenchidos
}

const verificaUnidadesIguais = (unidadeEntrada, unidadeSaida) => {
    let camposDiferentes = true
    unidades.forEach((item) => {
        if (unidadeEntrada === unidadeSaida) {
            item.classList.add('mensagem-erro-visivel')
            item.innerHTML = 'As unidades devem ser diferentes para conversão'
            camposDiferentes = false
        }
    })

    return camposDiferentes
}

const exibeResultado = (valorEntrada, unidadeEntrada, resultado, unidadeSaida) => {
    const mensagemResultado = document.getElementById('mensagem-resultado')
    mensagemResultado.classList.add('mensagem-resultado')

    mensagemResultado.innerHTML = `${valorEntrada} ${unidadeEntrada} equivalem a ${resultado.toLocaleString('pt-BR')} ${unidadeSaida} `
}

btnConverter.addEventListener('click', () => {

    const valorEntrada = document.querySelector('#valor-entrada').value
    const unidadeEntrada = document.querySelector('#unidade-original').value
    const unidadeSaida = document.querySelector('#unidade-desejada').value

    let converter = verificaInputs() && verificaUnidadesIguais(unidadeEntrada, unidadeSaida) ? true : false

    if (converter) {
        converterMedidas(unidadeEntrada, unidadeSaida, valorEntrada)
    }
})
