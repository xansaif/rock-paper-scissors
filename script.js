
function rpc(p1, p2)
{
    let winner = "";

    if (p1 == p2)
    {
        return "tie";
    }

    else if ((p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock") || (p1 == "sissors" && p2 == "paper") ) // user win
    {
        return "You won the game";
    }

    else if ((p2 == "rock" && p1 == "scissors") || (p2 == "paper" && p1 == "rock") || (p2 == "sissors" && p1 == "paper") ) // computer win
    {
        return "You won the game";
    }   

    else return "invalid input"
    
}



function game(num)
{
    let choices = ["rock","paper","sissors"]
    

  for (let i = 1; i<=num; i++)  
  {
    let userPick, comPick;
     pick = prompt("Eneter your choice: ");
     userPick = pick.toLowerCase();
     comPick = choices[Math.floor(Math.random()*3)];

     console.log(`You picked ${userPick} computer picked ${comPick}`);
     console.log(rpc(userPick, comPick));
  }
}

game(5);