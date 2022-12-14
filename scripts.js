const button = document.getElementById('convert-button')
const select = document.getElementById('moeda-select')



const converterValor = async () => {
    const input = document.getElementById('input-real').value
    const valorReal = document.getElementById('valor-real')
    const valortexto = document.getElementById('valor-texto')

    const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high



    console.log(data)


    valorReal.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(input);

    if (select.value === 'U$ Dólar Americano') {
        valortexto.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(input / dolar);
    }

    if (select.value === '€ Euro') {
        valortexto.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(input / euro);
    }

    if (select.value === 'Bitcoin') {
        valortexto.innerHTML = (input / bitcoin)

    }

}

const changeMoeda = () => {
    const nomeMoeda = document.getElementById("nome-moeda")
    const moedaImg = document.getElementById('moeda-img')

    if (select.value === 'U$ Dólar Americano') {
        nomeMoeda.innerHTML = "Dólar Americano"
        moedaImg.src = "./img/EUS.jpg"
    }

    if (select.value === '€ Euro') {
        nomeMoeda.innerHTML = "€ Euro"
        moedaImg.src = "./img/euro.jpg"
    }

    if (select.value === 'Bitcoin') {
        nomeMoeda.innerHTML = "Bitcoin"
        moedaImg.src = "./img/Bitcoin.jpg"
    }
    converterValor()

}

button.addEventListener('click', converterValor)
select.addEventListener('change', changeMoeda)