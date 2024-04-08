const firstScreen = document.querySelector('.firstScreen')
const secondScreen = document.querySelector('.secondScreen')
const cookieButton = document.getElementById('cookieButton')
const resetButton = document.getElementById('resetButton')

//Função para fazer a trocar de telas
function handleTwoScreen() {
    firstScreen.classList.toggle('hide')
    secondScreen.classList.toggle('hide')

    
    //Muda a frase de aleatóriamente
    const phrases = [
        "O sucesso torna as pessoas modestas, amigáveis e tolerantes. E o fracasso que as faz ásperas e ruins.",
    
        "Aprenda a dialogar para manter discussões amigáveis.",
    
        "Ninguém é sábio por falar muito. Aquele que é pacífico, amigável e sem medo é chamado de sábio.",
    
        "Desfrute de todas as amizades. Seja fiel, amigável e ajude sempre.",
    
        "Seja amigável até mesmo com aqueles que não sejam recíprocos com você, porque é dessa forma que coisas novas e inesperadas podem surgir.",
        
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    ]
    const random = Math.round(Math.random() * 5)

    document.querySelector('.ticket').innerHTML = `${phrases[random]}`
} 

//Função para reiniciar a página com o clique do mouse
function handleResetScreen() {
    location.reload()
} 

//Função para reiniciar a página com o Enter do teclado
function handleResetEnter(event) {
    if(event.key == 'Enter' && firstScreen.classList.contains('hide')) {
        location.reload()
    }
}

//Eventos
cookieButton.addEventListener('click', handleTwoScreen)
resetButton.addEventListener('click', handleResetScreen)
document.addEventListener('keypress', handleResetEnter)