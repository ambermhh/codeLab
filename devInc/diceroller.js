




function rollDice() {

    let dicesides= document.getElementById("dicesides").value
    
    let diceface = Math.floor(Math.random() * dicesides) + 1;

    document.getElementById("diceface").innerHTML= diceface
  
  
  }
  

  

