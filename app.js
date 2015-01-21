window.addEventListener("load",function()
{ 
    var items = document.getElementById("GameBoard"); //board locations for array
    items.addEventListener('click', doStuff);  
    var xMoves=[false,false,false,false,false,false,false,false,false];  //keeping track of x moves
    var oMoves=[false,false,false,false,false,false,false,false,false];  //keeping track of y moves
    var winState =false;
    var moveCounter=1;
    function doStuff(event) {  
        //event target =which square is clicked
        //event.target.className = "x or y";
        if (moveCounter<=9){    //refactor into a move X, O function
        if (moveCounter % 2 === 0 ){  //o moves
          if (winState===true)  //in case the game has already ended (1/2st half of move checker)
           {
              alert("The Game has ended, stop playing and please hit reset.");
              return;
            }
          if(event.target.hasAttribute("className")) //valid move checker 2nd half
            { 
              alert("Invalid move,pick another square"); 
              return;
            }
          event.target.setAttribute("src", "./images/o.jpeg");
          event.target.setAttribute("className", "o");
          oMoves[event.target.id]=Number(event.target.id); //forcing a number into the array (use parseInt?)
          hasWinner(oMoves,"O");                           //just use push 
          console.log(oMoves);
        }
        else{ //xmoves
           if (winState===true)
            {
              alert("The Game has ended, stop playing and please hit reset.");
              return;
            }
           if(event.target.hasAttribute("className")) //valid move checker
            { 
              alert("Invalid move,pick another square");
              return;
            }
          event.target.setAttribute("src", "./images/x.png");
          event.target.setAttribute("className", "x");
          xMoves[event.target.id]=Number(event.target.id); //forcing a number into the array, does not have to be at a specific spot, just push
          hasWinner(xMoves,"X");
          console.log(xMoves);
        } 
          moveCounter++;  //no mattter who moves, increment the move counter
        }
     else
          alert("Please Restart the Game"); //max moves reached
    }

    var reset = document.getElementById("reset"); 
    function originalState(name)  //removes class name and places black block
    {
      document.getElementById(name).setAttribute("src","./images/blkSquare.gif");
      document.getElementById(name).removeAttribute("className");
    }
    
    reset.addEventListener('click',restart); 
    
    function restart(event) {   //puts everythiung back to the beginning
       originalState("0");
       originalState("1");
       originalState("2");  //put a loop here?
       originalState("3");
       originalState("4");
       originalState("5");
       originalState("6");
       originalState("7");
       originalState("8");
       moveCounter=1;
       items.addEventListener('click', doStuff);  //so we can click on all squares again
       xMoves = [false,false,false,false,false,false,false,false,false]; //resetting all moves
       oMoves = [false,false,false,false,false,false,false,false,false];
       winState=false;
    }

    function hasWinner(player,name){
      //check row
      if (player[0]===0 && player[1]===1 && player[2]===2)
      {
        alert(name + " !!!!has Won. Please reset to play again.");
        winState=true;
        return true;
      }
      else if (player[3]==3 && player[4]==4 && player[5]===5)
      {
        alert(name + " has Won. Please reset to play again.");
        winState=true;
        return true;
      }
      else if (player[6]===6 && player[7]===7 && player[8]===8)
      {
        alert(name + " has Won. Please reset to play again.");
        winState=true;
        return true;
      }
      //check column
      else if (player[0]===0 && player[3]===3 && player[6]===6)
      {
        alert(name + " has Won. Please reset to play again.");
        winState=true;
        return true;
      }
      else if (player[1]===1 && player[4]===4 && player[7]===7)
      {
        alert(name + " has Won. Please reset to play again.");
        winState=true;
        return true;
      }
      else if (player[2]===2 && player[5]===5 && player[8]===8)
      {
        alert(name + " has Won. Please reset to play again.");
        winState=true;
        return true;
      }
      //check diagonal
      else if (player[0]===0 && player[4]===4 && player[8]===8)
      {
        alert(name + " has Won. Please reset to play again.");
        winState=true;
        return true;
      }
      else if (player[2]===2 && player[4]===4 && player[6]==6)
      {
        alert(name + " has Won. Please reset to play again.");
        winState=true;
        return true;
      }
      return false;
    }
      

}); 
