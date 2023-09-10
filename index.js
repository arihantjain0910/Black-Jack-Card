let card = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
 name: "Arihant",
 chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + "$ " + player.chips

function getRandomCard(){
    let randomCard = Math.floor (Math.random()*13) + 1
     if(randomCard > 10){
        return 10
     }else if(randomCard === 1){
        return 11
     }else {
        return randomCard
     }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    card = [firstCard , secondCard]
    renderGame()
}

function renderGame(){
    
    cardEl.textContent = "Cards : " 
    for (let i = 0 ; i < card.length ; i++) {
        cardEl.textContent += card[i] + " " 
    }
    sumEl.textContent = "Sum : " + sum ;
if (sum <=20){
    message = "Do you want to pick up a new card"
    
}else if(sum === 21){
    message = "Hey! You got the blackjack"
    hasBlackjack = true;
}else{
    message = "You lose the game"
    isAlive = false ;
}

messageEl.textContent = message;
}

function newCard(){

    if (isAlive === true && hasBlackjack === false){
    let newCard = getRandomCard();

    sum += newCard;

    card.push(newCard)
    

    renderGame();
    }
}

