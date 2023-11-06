
import { setDirection, clearMove } from "./movimiento.js";
import { setRowStart, setRowEnd, setColumnStart, setColumnEnd} from "../juego/nodeManipulation.js";
import { setPoints, setScore, points } from "./points.js";
import { checkForFoodNoPoints } from "./checkers.js";
import { allowObstacles, enableObstacleBtn } from "./gameRules.js";

export let board = document.getElementById('game-board');


class Player {
    constructor(snakeColor, enemyColor) {
        this.snakeColor = snakeColor;
        this.enemyColor = enemyColor;
    }
    head;
    snakeArr = [];
    direction;
    move;
    points;
    checkForCollision = function(row, col) {
        let newPosition = document.querySelector(`.position-${row}-${col}`);

        if (newPosition == null) {
            return false;
        }
    
        return (newPosition.style.backgroundColor == this.enemyColor) ? true : false;
    }
}

export let playerOne = new Player('red');
export let playerTwo = new Player('pink');
export let foodColor = 'rgb(255, 201, 60)';
export let obstacleColor = 'blue';
let min = 1;
let max = 21;

let obstacleArr = [];


function createStartNodes() {
    let node = createNode(playerOne.snakeColor);

    setRowStart(node, 1);
    setRowEnd(node, 2);
    setColumnStart(node, 1);
    setColumnEnd(node, 2);

    node.classList.add('position-1-1');
    playerOne.snakeArr.push(node);
    boardAppend(node, playerOne);

    let nodeTwo = createNode(playerTwo.snakeColor);

    setRowStart(nodeTwo, 21);
    setRowEnd(nodeTwo, 22);
    setColumnStart(nodeTwo, 21);
    setColumnEnd(nodeTwo, 22);

    nodeTwo.classList.add('position2-21-21');
    playerTwo.snakeArr.push(nodeTwo);
    boardAppend(nodeTwo, playerTwo);
}

export function createFood() {

    let newFood = createNode();

    let rowStart = getRandomIntInclusive(min, max);
    let columnStart = getRandomIntInclusive(min, max);

    let newPosition = document.querySelector(`.position-${rowStart}-${columnStart}`)
    let newPositionSecondSnake = document.querySelector(`.position2-${rowStart}-${columnStart}`)

    if ((newPosition == null) && (newPositionSecondSnake == null)) {
        setRowStart(newFood, rowStart);
        setRowEnd(newFood, rowStart + 1);
        setColumnStart(newFood, columnStart);
        setColumnEnd(newFood, columnStart + 1);
        newFood.style.backgroundColor = foodColor;
        newFood.classList.add(`food-${rowStart}-${columnStart}`);
        board.appendChild(newFood);

    } else {
        createFood();
    }

}

export function createObstacle() {

    if (!allowObstacles) {
        return;
    }

    let newObstacle = createNode();

    let rowStart = getRandomIntInclusive(min, max);
    let columnStart = getRandomIntInclusive(min, max);

    let newPosition = document.querySelector(`.position-${rowStart}-${columnStart}`);
    let newPositionTwo = document.querySelector(`.position2-${rowStart}-${columnStart}`);

    let nearUp = document.querySelector(`.position-${rowStart - 1}-${columnStart}`)
    let nearDown = document.querySelector(`.position-${rowStart + 1}-${columnStart}`)
    let nearRight = document.querySelector(`.position-${rowStart}-${columnStart + 1}`)
    let nearLeft = document.querySelector(`.position-${rowStart}-${columnStart - 1}`)

    let nearUpTwo = document.querySelector(`.position2-${rowStart - 1}-${columnStart}`)
    let nearDownTwo = document.querySelector(`.position2-${rowStart + 1}-${columnStart}`)
    let nearRightTwo = document.querySelector(`.position2-${rowStart}-${columnStart + 1}`)
    let nearLeftTwo = document.querySelector(`.position2-${rowStart}-${columnStart - 1}`)

    let nothingNear = ((nearUp == null) && (nearDown == null) &&  (nearRight == null) && (nearLeft == null));
    let nothingNearTwo = ((nearUpTwo == null) && (nearDownTwo == null) &&  (nearRightTwo == null) && (nearLeftTwo == null));

    if ((newPosition == null) && (newPositionTwo == null) && nothingNear && nothingNearTwo && !checkForFoodNoPoints(rowStart, columnStart)) {
        setRowStart(newObstacle, rowStart);
        setRowEnd(newObstacle, rowStart + 1);
        setColumnStart(newObstacle, columnStart);
        setColumnEnd(newObstacle, columnStart + 1);
        newObstacle.style.backgroundColor = obstacleColor;
        newObstacle.classList.add(`obstacle-${rowStart}-${columnStart}`);
        board.appendChild(newObstacle);
        obstacleArr.push(newObstacle);

        if (obstacleArr.length < 4) {
            createObstacle()
        }

        if (obstacleArr.length == 4) {
            board.removeChild(obstacleArr.shift())
            board.removeChild(obstacleArr.shift())
        }
    } else {
        createObstacle();
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

export function createNode(playerColor) {
    let node = document.createElement('div');
    node.style.backgroundColor = playerColor;
    node.style.border = '2px solid black';
    return node;
    // board.appendChild(node)
}

export function boardAppend(node, player) {
    board.appendChild(node);
    player.head = player.snakeArr[player.snakeArr.length - 1];
}

export function boardRemove(node) {
    board.removeChild(node);
}

export function lose() {
    alert(`YOU LOST! YOUR SCORE WAS ${points}`);
    startGame();
}

export function playerOneLose() {
    console.log('Player one loses');
}

export function playerTwoLoses() {
    console.log('Player two loses');
}

export function startGame() {
    clearMove(playerOne);
    clearMove(playerTwo);
    enableObstacleBtn();
    board.innerHTML = '';
    playerOne.snakeArr.length = 0;
    playerTwo.snakeArr.length = 0;
    obstacleArr.length = 0;
    setDirection(playerOne, null);
    setDirection(playerTwo, null);
    setPoints(0);
    setScore('0000');
    createStartNodes();
    createFood();
}