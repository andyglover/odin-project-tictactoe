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
        this.textContent="f";
    }
    const render = function () {
        spaces.forEach(element => {
            //make divs
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.textContent=element;
            //add event listener
            div.addEventListener("click", placeSymbol)
            //get container and put divs in it
            const container = document.querySelector("#grid-container");
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