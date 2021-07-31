
let button = document.getElementById("button")
let select = document.getElementById("troca-moedas")

//essa funcao e responsavel pela mudanca de valores
async function ConverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()



    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high


    console.log(dolar)
    console.log(euro)




    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let ValorEmDolar = inputValorReais / dolar
        inputMoedas.innerHTML = ValorEmDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-De', { style: 'currency', currency: 'EUR' })



    }

    textoReal.innerHTML = inputValorReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


}
//essa funcao e responsavel por trocar a bandeira e o nome das moedas
function TrocaDeMoeda() {

    let textomoedas = document.getElementById("texto-moedas")
    let bandeiramoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar Americano") {
        textomoedas.innerHTML = "Dólar Americano"
        bandeiramoedas.src = "./IMG/estados-unidos (1) 1.png "
    }

    if (select.value === "€ Euro") {

        textomoedas.innerHTML = "Euro"
        bandeiramoedas.src = "./IMG/euro.png"

    }

    ConverterMoedas()


}





button.addEventListener("click", ConverterMoedas)
select.addEventListener("change", TrocaDeMoeda)

