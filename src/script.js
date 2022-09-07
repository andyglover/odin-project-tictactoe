console.log("Hello, World!")

const playerFactory = (name, symbol) => {
    const sayHello = () => console.log(`hello, I'm ${name} and my symbol is ${symbol}.`);
    return { name, symbol, sayHello };
}

const gameboard = (() => {
    let spaces = [
        "?","?","?",
        "?","?","?",
        "?","?","?"
    ];
    const placeSymbol = function () {
        thisIndex = this.getAttribute("data-index"); //gets the index of the position that was clicked
        // if(spaces[thisIndex]!=="cool"){
        //     spaces[thisIndex] = "cool";}
        // else{
        //     spaces[thisIndex] = "awesome";
        // }
        let player = gameState.getActivePlayer();
        
        //if the spot is not taken and the game is not over
        if(spaces[thisIndex]=="?" && !gameState.evaluateWinConditions()){
        //place the symbol of the player whose turn it is
            spaces[thisIndex] = player.symbol;
            console.log("placed symbol")
            gameState.switchActivePlayer();
        }
        else {
            console.log("didn't place symbol")
        }
        console.log(spaces);
        render();
    }
    const render = function () {
        const container = document.querySelector("#grid-container");
        while (container.firstChild) {
            container.removeChild(container.lastChild);
          } //remove old items so we can add them all again with the new one.
        spaces.forEach((element, i) => {
            //make divs
            const div = document.createElement('div');
            div.setAttribute("data-index", i)
            div.classList.add('grid-item');
            div.textContent=element;
            //add event listener
            div.addEventListener("click", placeSymbol)
            //get container and put divs in it
            container.appendChild(div);
        });
        //if a win is detected, display the reset button
        if (gameState.evaluateWinConditions()){
            const button = document.createElement('button');
            button.textContent = "start new game!";
            button.id = "reset-button";
            button.addEventListener("click", gameState.resetGame)
            document.body.appendChild(button);
        }
    }
    return { render, spaces };
})();

const playerOne = playerFactory("P1", "X")
const playerTwo = playerFactory("P2", "O")

const gameState = (() => {
    //at the beginning of game it is player one's turn
    let activePlayer = playerOne;
    
    const getActivePlayer = () => {
        return activePlayer;}
    const setActivePlayer = (player) => {
        activePlayer = player;
    }
    const switchActivePlayer = () => {
        if(getActivePlayer()==playerOne){
            setActivePlayer(playerTwo)
        }
        else{
            setActivePlayer(playerOne)
        }
    }
    const evaluateWinConditions = () => {
        if(checkBoardForWin(0,3,6) == "win"){
            console.log("win column 1");
            return true;
        }
        if(checkBoardForWin(1,4,7) == "win"){
            console.log("win column 2");
            return true;
        }
        if(checkBoardForWin(2,5,8) == "win"){
            console.log("win column 3");
            return true;
        }
        if(checkBoardForWin(0,1,2) == "win"){
            console.log("win row 1");
            return true;
        }
        if(checkBoardForWin(3,4,5) == "win"){
            console.log("win row 2");
            return true;
        }
        if(checkBoardForWin(6,7,8) == "win"){
            console.log("win row 3");
            return true;
        }
        if(checkBoardForWin(0,4,8) == "win"){
            console.log("win cross 1");
            return true;
        }
        if(checkBoardForWin(2,4,6) == "win"){
            console.log("win cross 2");
            return true;
        }
        else{
            return false;
        }
    }
    const checkBoardForWin = (position1, position2, position3) => {
        if (gameboard.spaces[position1] != "?" && gameboard.spaces[position1] == gameboard.spaces[position2] && gameboard.spaces[position1] == gameboard.spaces[position3]) {
            return "win";
        }
        else {
            console.log("no match");
        }
    }
    const resetGame = () => {
        //reset the array
        gameboard.spaces.forEach((element, i) => {
            gameboard.spaces[i] = "?"
        })
        //reset active player
        setActivePlayer(playerOne)
        //remove the delete button
        const button = document.querySelector('#reset-button');
        button.parentNode.removeChild(button);
        //render
        gameboard.render();
    }
    return { getActivePlayer, switchActivePlayer, evaluateWinConditions, checkBoardForWin, resetGame};
})();
playerOne.sayHello();
playerTwo.sayHello();
gameboard.render();
