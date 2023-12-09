const apikey = "28838148eef2423e1cb56ed91262f783"
const inputCidade = document.getElementById('buscarCidade')
const celsus = document.getElementById('numberCelsus')
const tempoAtual = document.getElementById('tempoAtualizado')
const nomeDacidade = document.getElementById('nomecidade')
const sessaoTermica = document.getElementById('termica')
const humildade = document.getElementById('humidadeSessao')
const icone = document.getElementById('iconeTempo')

inputCidade.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        buscarInforTempo(inputCidade.value)
    }
})

function buscarInforTempo(cidade){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=metric&lang=pt_br`)
    .then(r => r.json())
    .then(tempo =>{
        exibirInfor(tempo)
        console.log(tempo)
    })
    .catch((erro) => {console.log("Aconteceu um erro" + erro)})
}

function exibirInfor(tempo){
    icone.setAttribute("src", `https://openweathermap.org/img/wn/${tempo.weather[0].icon}@4x.png`)
    celsus.innerText = parseInt(tempo.main.temp)
    tempoAtual.innerText = tempo.weather[0].description
    nomeDacidade.innerText = tempo.name
    sessaoTermica.innerText = `${parseInt(tempo.main.feels_like)}°C`
    humildade.innerText = `${tempo.main.humidity}%`
}