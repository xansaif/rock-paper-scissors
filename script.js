const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let winner = document.querySelector(".winner")
let picktext = document.querySelector(".pick")
let score = document.querySelector(".score")

let pround = 0;
let cround = 0;
let runCount = 1;
let userChoice = "asd";


rock.addEventListener("click",() =>
{
    userChoice = "rock";
    check();
    game();
    runCount +=1
    
})

paper.addEventListener("click",() =>
{
    userChoice = "paper";
    check();
    game();
    runCount +=1
})

scissors.addEventListener("click",() =>
{
    userChoice = "scissors";
    check();
    game();
    runCount +=1
})



function rpc(p1, p2)
{

    if (p1 == p2)
    {
        return "tie";

    }

    else if ((p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock") || (p1 == "scissors" && p2 == "paper") ) // user win
    {
        pround +=1
        return "You won the game";
        
    }

    else if ((p2 == "rock" && p1 == "scissors") || (p2 == "paper" && p1 == "rock") || (p2 == "scissors" && p1 == "paper") ) // computer win
    {
        cround +=1
        return "computer won the round";
        
    }   
    
    else{
        console.log(p1,p2) 
    return "invalid input"
    
    }
}


function game()
{
    let choices = ["rock","paper","scissors"]
      
    let userPick = "", comPick = "";
     comPick = choices[Math.floor(Math.random()*3)];
     userPick = userChoice;

     let text = `You picked: ${userPick}, computer picked: ${comPick}`;
     let winnerText = (rpc(userPick, comPick));
     let scoreText = `You: ${pround} Computer: ${cround}`;
     picktext.textContent = text;
     winner.textContent = winnerText;
     score.textContent = scoreText;
     console.log(runCount)


}

function check()
{
if (runCount == 6)
{
    runCount = 1;
    pround = 0;
    cround = 0;
    if(pround == cround)
    {
        winner.textContent = "Tie";
    }

    else if(pround > cround)
    {
        winner.textContent = "You Won";
        score.style.cssText = "background-color: green;"
    }
    if(pround < cround)
    {
        winner.textContent = "You Lose";
        score.style.cssText = "background-color: red;"
    }
}
}