console.log("Hello, World!")

const playerFactory = (name, symbol) => {
    const sayHello = () => console.log(`hello, I'm ${name} and my symbol is ${symbol}.`);
    return { name, symbol, sayHello };
}

const gameboard = (() => {
    const spaces = [
        "x",
        "o",
        "x",
        "o",
        "x",
        "o",
        "x",
        "o",
        "x"
    ];
    const placeSymbol = function () {
        thisIndex = this.getAttribute("data-index");
        if(spaces[thisIndex]!=="cool"){
            spaces[thisIndex] = "cool";}
        else{
            spaces[thisIndex] = "awesome";
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
        
    }
    return { render };
})();
const playerOne = playerFactory("P1", "X")
const playerTwo = playerFactory("P2", "O")
playerOne.sayHello();
playerTwo.sayHello();
gameboard.render();