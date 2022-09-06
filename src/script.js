console.log("Hello, World!")

const playerFactory = (name, symbol) => {
    const sayHello = () => console.log(`hello, I'm ${name} and my symbol is ${symbol}.`);
    return { name, symbol, sayHello };
}
var gameboard = [];
const playerOne = playerFactory("P1", "X")
const playerTwo = playerFactory("P2", "O")
playerOne.sayHello();
playerTwo.sayHello();