let board = document.getElementById('game-board');
let score = document.getElementById('score');

let snakeArr = [];
let head;

let points = 0;

let min = 1;
let max = 21;
let snakeSpeed = 99;
let direction;
let move;

let snakeColor = 'red';
let foodColor = 'blue';


function lose() {
    alert(`YOU LOST! YOUR SCORE WAS ${points}`);
    resetGame();
}

function resetGame() {
    clearMove();
    board.innerHTML = '';
    snakeArr.length = 0;
    direction = null;
    points = 0;
    score.textContent = 'SCORE: 0000';
    createStartNode();
    createFood();
}

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

function boardAppend(node) {
    board.appendChild(node);
    head = snakeArr[snakeArr.length - 1];
}

function createNode() {
    let node = document.createElement('div');
    node.style.backgroundColor = snakeColor;
    node.style.border = '1px solid black';
    return node;
    // board.appendChild(node)
}

function setRowStart(node, rowStart) {
    node.style.gridRowStart = rowStart;
}

function setRowEnd(node, rowEnd) {
    node.style.gridRowEnd = rowEnd;
}

function setColumnStart(node, columnStart) {
    node.style.gridColumnStart = columnStart;
}

function setColumnEnd(node, columnEnd) {
    node.style.gridColumnEnd = columnEnd;
}

function removeTail() {
    board.removeChild(snakeArr[0]);
    snakeArr.shift();
}

function moveHeadDown() {
    let newHead = createNode();
    direction = 'down';

    setRowStart(newHead, parseInt(head.style.gridRowStart) + 1);
    setRowEnd(newHead, parseInt(head.style.gridRowEnd) + 1);
    setColumnStart(newHead, head.style.gridColumnStart);
    setColumnEnd(newHead, head.style.gridColumnStart);

    let rowStart = newHead.style.gridRowStart;
    let colStart = newHead.style.gridColumnStart;

    if ((parseInt(head.style.gridRowStart) == 21) || (checkForSnake(rowStart, colStart))) {
        console.log("YOU LOSE");
        lose();
        return;
    } else if (checkForFood(rowStart, colStart)) {
        newHead.classList.add(`position-${rowStart}-${colStart}`);
        snakeArr.push(newHead);
        boardAppend(newHead);
    } else {
        newHead.classList.add(`position-${rowStart}-${colStart}`);
        snakeArr.push(newHead);
        boardAppend(newHead);
        removeTail();
    }
}

function moveHeadUp() {
    let newHead = createNode();
    direction = 'up';

    setRowStart(newHead, parseInt(head.style.gridRowStart) - 1);
    setRowEnd(newHead, parseInt(head.style.gridRowEnd) - 1);
    setColumnStart(newHead, head.style.gridColumnStart);
    setColumnEnd(newHead, head.style.gridColumnStart);

    let rowStart = newHead.style.gridRowStart;
    let colStart = newHead.style.gridColumnStart;

    if ((parseInt(head.style.gridRowStart) == 1) || (checkForSnake(rowStart, colStart))) {
        console.log("YOU LOSE");
        lose();
        return;
    } else if (checkForFood(rowStart, colStart)) {
        newHead.classList.add(`position-${rowStart}-${colStart}`);
        snakeArr.push(newHead);
        boardAppend(newHead);
    } else {
        newHead.classList.add(`position-${rowStart}-${colStart}`);
        snakeArr.push(newHead);
        boardAppend(newHead);
        removeTail();
    }

}

function moveHeadRight() {
    let newHead = createNode();
    direction = 'right';

    setRowStart(newHead, head.style.gridRowStart);
    setRowEnd(newHead, head.style.gridRowEnd);
    setColumnStart(newHead, parseInt(head.style.gridColumnStart) + 1);
    setColumnEnd(newHead, parseInt(head.style.gridColumnStart) + 1);

    let rowStart = newHead.style.gridRowStart;
    let colStart = newHead.style.gridColumnStart;


    if ((parseInt(head.style.gridColumnStart) == 21) || (checkForSnake(rowStart, colStart))) {
        console.log("YOU LOSE");
        lose();
        return;
    } else if (checkForFood(rowStart, colStart)) {
        newHead.classList.add(`position-${rowStart}-${colStart}`);
        snakeArr.push(newHead);
        boardAppend(newHead);
    } else {
        newHead.classList.add(`position-${rowStart}-${colStart}`);
        snakeArr.push(newHead);
        boardAppend(newHead);
        removeTail();
    }

}

function moveHeadLeft() {
    let newHead = createNode();
    direction = 'left';

    setRowStart(newHead, head.style.gridRowStart);
    setRowEnd(newHead, head.style.gridRowEnd);
    setColumnStart(newHead, parseInt(head.style.gridColumnStart) - 1);
    setColumnEnd(newHead, parseInt(head.style.gridColumnStart) - 1);

    let rowStart = newHead.style.gridRowStart;
    let colStart = newHead.style.gridColumnStart;


    if ((parseInt(head.style.gridColumnStart) == 1) || (checkForSnake(rowStart, colStart))) {
        console.log("YOU LOSE");
        lose();
        return;
    } else if (checkForFood(rowStart, colStart)) {
        newHead.classList.add(`position-${rowStart}-${colStart}`);
        snakeArr.push(newHead);
        boardAppend(newHead);
    } else {
        newHead.classList.add(`position-${rowStart}-${colStart}`);
        snakeArr.push(newHead);
        boardAppend(newHead);
        removeTail();
    }

}

function checkForSnake(row, col) {
    let newPosition = document.querySelector(`.position-${row}-${col}`);

    if (newPosition == null) {
        return false;
    }

    return (newPosition.style.backgroundColor == snakeColor) ? true : false;
}

function checkForFood(row, col) {
    let newPosition = document.querySelector(`.food-${row}-${col}`);

    if (newPosition == null) {
        return false;
    }
    if (newPosition.style.backgroundColor == foodColor) {
        sumPoints();
        board.removeChild(newPosition);
        createFood();
        return true;
    }

    return false;
}

function sumPoints() {
    points += 100;

    if (points < 1000) {
        score.textContent = `SCORE: 0${points}`;
    } else {
        score.textContent = `SCORE: ${points}`;
    }

}

window.addEventListener('keydown', (event) => {
    let key = event.code;
    if (key == 'ArrowRight' && direction != 'left' && direction != 'right') {
        // moveHeadRight();
        goRight();
    } else if (key == 'ArrowLeft' && direction != 'right' && direction != 'left') {
        // moveHeadLeft();
        goLeft();
    } else if (key == 'ArrowUp' && direction != 'down' && direction != 'up') {
        // moveHeadUp();
        goUp();
    } else if (key == 'ArrowDown' && direction != 'up' && direction != 'down') {
        // moveHeadDown();
        goDown();
    }
})

function goRight() {
    moveHeadRight();
    clearMove();
    move = setInterval(moveHeadRight, snakeSpeed);

}

function goLeft() {
    moveHeadLeft();
    clearMove();
    move = setInterval(moveHeadLeft, snakeSpeed);
}

function goUp() {
    moveHeadUp();
    clearMove();
    move = setInterval(moveHeadUp, snakeSpeed);
}

function goDown() {
    moveHeadDown();
    clearMove();
    move = setInterval(moveHeadDown, snakeSpeed);

}

function clearMove() {
    clearInterval(move);
}

function createFood() {

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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}



createStartNode()
createFood()