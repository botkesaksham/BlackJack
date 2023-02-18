let sum = 0;
let cards=[]
let hasblackjack = false
let isalive=true
let message=""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl= document.querySelector("#card-el")

function startgame(){
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards.push(firstcard)
    cards.push(secondcard)
    sum=firstcard+secondcard
    rendergame()
}



function getRandomCard(){
    let random=Math.floor(Math.random()*13+1)
    if (random>10){
        random=10
    }

    else if(random === 1){
        random=1
    }
    return random
}

function rendergame(){
    if (sum < 21){
        message= "Do you want to draw another card"
    }

    else if(sum === 21){
        message = "You won BlackJack"
        hasblackjack=true

    }

    else{
        message= "Ohh!! You lost the game"
        isalive=false
    }


    messageEl.textContent = message
    sumEl.textContent = "Sum :"+sum
    cardEl.textContent = "Card : "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i]+" "
 
    }
} 

function newcard(){
    if (isalive===true && hasblackjack === false){
        let newcard = getRandomCard()
        sum+=newcard
        cards.push(newcard)
        rendergame() 
    }
    
}
    
