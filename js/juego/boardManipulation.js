
import { setDirection, clearMove } from "./movimiento.js";
import { setRowStart, setRowEnd, setColumnStart, setColumnEnd} from "./nodeManipulation.js";
import { setPoints, setScore, points } from "./points.js";
import { checkForFoodNoPoints } from "./checkers.js";
import { allowObstacles, enableObstacleBtn } from "./gameRules.js";

export let board = document.getElementById('game-board');

export let snakeArr = [];
export let head;
export let snakeColor = 'red';
export let foodColor = 'rgb(255, 201, 60)';
export let obstacleColor = 'blue';
let min = 1;
let max = 21;

let obstacleArr = [];


function createStartNode() {
    let node = createNode();

    setRowStart(node, 11);
    setRowEnd(node, 12);
    setColumnStart(node, 11);
    setColumnEnd(node, 12);

    node.classList.add('position-11-11');
    snakeArr.push(node);
    boardAppend(node);
}

export function createFood() {

    let newFood = createNode();

    let rowStart = getRandomIntInclusive(min, max);
    let columnStart = getRandomIntInclusive(min, max);

    let newPosition = document.querySelector(`.position-${rowStart}-${columnStart}`)

    if (newPosition == null) {
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

    let newPosition = document.querySelector(`.position-${rowStart}-${columnStart}`)

    let nearUp = document.querySelector(`.position-${rowStart - 1}-${columnStart}`)
    let nearDown = document.querySelector(`.position-${rowStart + 1}-${columnStart}`)
    let nearRight = document.querySelector(`.position-${rowStart}-${columnStart + 1}`)
    let nearLeft = document.querySelector(`.position-${rowStart}-${columnStart - 1}`)

    let nothingNear = (nearUp == null && nearDown == null &&  nearRight == null && nearLeft == null);


    if (newPosition == null && nothingNear && !checkForFoodNoPoints(rowStart, columnStart)) {
        setRowStart(newObstacle, rowStart);
        setRowEnd(newObstacle, rowStart + 1);
        setColumnStart(newObstacle, columnStart);
        setColumnEnd(newObstacle, columnStart + 1);
        newObstacle.style.backgroundColor = obstacleColor;
        newObstacle.classList.add(`obstacle-${rowStart}-${columnStart}`);
        board.appendChild(newObstacle);
        obstacleArr.push(newObstacle);
        if (obstacleArr.length > 1) {
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

export function createNode() {
    let node = document.createElement('div');
    node.style.backgroundColor = snakeColor;
    node.style.border = '1px solid black';
    return node;
    // board.appendChild(node)
}

export function boardAppend(node) {
    board.appendChild(node);
    head = snakeArr[snakeArr.length - 1];
}

export function boardRemove(node) {
    board.removeChild(node);
}

export function lose() {
    alert(`YOU LOST! YOUR SCORE WAS ${points}`);
    startGame();
}

export function startGame() {
    clearMove();
    enableObstacleBtn();
    board.innerHTML = '';
    snakeArr.length = 0;
    obstacleArr.length = 0;
    setDirection(null);
    setPoints(0);
    setScore('0000');
    createStartNode();
    createFood();
}