let botao = document.getElementById("botao")
let select = document.getElementById("s")







//essa função é responsável por converter as moedas 
async function convertermoedas() {

let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(function(resposta){
   return resposta.json()
})

let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high

    let inputvaloremreais = Number(document.getElementById("input").value)
    let textomoedas = document.getElementById("input-moedas")
    let textoreal = document.getElementById("texto-real")
    if (select.value === "US$ Dólar Americano") {

        let valoremdolares = inputvaloremreais / dolar
        textomoedas.innerHTML = valoremdolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    }
    if (select.value === "€ Euro") {
        let valoremeuros = inputvaloremreais / euro
        textomoedas.innerHTML = valoremeuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

    }

    textoreal.innerHTML = inputvaloremreais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

}



// essa função é responsável por trocar o nome e o valor das moedas
function trocademoeda() {
    let textomoeda = document.getElementById("texto-moeda")
    let bandeiramoeda = document.getElementById("bandeira-moeda")

    if (s.value === "US$ Dólar Americano") {
        textomoeda.innerHTML = "Dólar Americano"
        bandeiramoeda.src = "./img/estados-unidos (1) 1.png"
    }
    if (s.value === "€ Euro") {
        textomoeda.innerHTML = "Euro"
        bandeiramoeda.src = "./img/Design sem nome 2.png"
    }
    convertermoedas()
}


botao.addEventListener("click", convertermoedas)
select.addEventListener("change", trocademoeda)
