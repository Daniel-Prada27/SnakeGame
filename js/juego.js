let board = document.getElementById('game-board');

let snakeArr = []
let head;

let min = 1;
let max = 21;

function createStartNode() {
    let node = document.createElement('div');
    node.style.backgroundColor = "red"
    node.style.border = '1px solid black'

    setRowStart(node, 11)
    setRowEnd(node, 12)
    setColumnStart(node, 11)
    setColumnEnd(node, 12)

    node.classList.add('position-11-11');
    snakeArr.push(node)
    boardAppend(node);
}

function boardAppend(node) {
    board.appendChild(node);
    head = snakeArr[snakeArr.length - 1]
}

function createNode() {
    let node = document.createElement('div');
    node.style.backgroundColor = "red"
    node.style.border = '1px solid black'
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
}

function moveHeadDown() {
    let newHead = createNode();


    setRowStart(newHead, parseInt(head.style.gridRowStart) + 1)
    setRowEnd(newHead, parseInt(head.style.gridRowEnd) + 1)
    setColumnStart(newHead, head.style.gridColumnStart)
    setColumnEnd(newHead, head.style.gridColumnStart)

    let rowStart = newHead.style.gridRowStart;
    let colStart = newHead.style.gridColumnStart;

    if ((parseInt(head.style.gridRowStart) == 21) || (checkForSnake(rowStart.colStart))) {
        console.log("YOU LOSE");
        return;
    }

    newHead.classList.add(`position-${rowStart}-${colStart}`)

    snakeArr.push(newHead)
    boardAppend(newHead);
}

function moveHeadUp() {
    let newHead = createNode();

    setRowStart(newHead, parseInt(head.style.gridRowStart) - 1)
    setRowEnd(newHead, parseInt(head.style.gridRowEnd) - 1)
    setColumnStart(newHead, head.style.gridColumnStart)
    setColumnEnd(newHead, head.style.gridColumnStart)

    let rowStart = newHead.style.gridRowStart;
    let colStart = newHead.style.gridColumnStart;

    if ((parseInt(head.style.gridRowStart) == 1) || (checkForSnake(rowStart, colStart))) {
        console.log("YOU LOSE");
        return;
    }

    newHead.classList.add(`position-${rowStart}-${colStart}`)

    snakeArr.push(newHead)
    boardAppend(newHead);

}

function moveHeadRight() {
    let newHead = createNode();

    setRowStart(newHead, head.style.gridRowStart)
    setRowEnd(newHead, head.style.gridRowEnd)
    setColumnStart(newHead, parseInt(head.style.gridColumnStart) + 1)
    setColumnEnd(newHead, parseInt(head.style.gridColumnStart) + 1)

    let rowStart = newHead.style.gridRowStart;
    let colStart = newHead.style.gridColumnStart;


    if ((parseInt(head.style.gridColumnStart) == 21) || (checkForSnake(rowStart, colStart))) {
        console.log("YOU LOSE");
        return;
    }

    newHead.classList.add(`position-${rowStart}-${colStart}`)

    snakeArr.push(newHead)
    boardAppend(newHead);

}

function moveHeadLeft() {
    let newHead = createNode();

    setRowStart(newHead, head.style.gridRowStart)
    setRowEnd(newHead, head.style.gridRowEnd)
    setColumnStart(newHead, parseInt(head.style.gridColumnStart) - 1)
    setColumnEnd(newHead, parseInt(head.style.gridColumnStart) - 1)

    let rowStart = newHead.style.gridRowStart;
    let colStart = newHead.style.gridColumnStart;


    if ((parseInt(head.style.gridColumnStart) == 1) || (checkForSnake(rowStart, colStart))) {
        console.log("YOU LOSE");
        return;
    }

    newHead.classList.add(`position-${rowStart}-${colStart}`)

    snakeArr.push(newHead)
    boardAppend(newHead);

}

function checkForSnake(row, col) {
    let newPosition = document.querySelector(`.position-${row}-${col}`)

    if (newPosition == null) {
        return false;
    }

    return (newPosition.style.backgroundColor == 'red') ? true : false;

}

window.addEventListener('keydown', (event) => {
    let key = event.code;
    console.log(event.code);
    if (key == 'ArrowRight') {
        // moveHeadRight();
        goRight()
    } else if (key == 'ArrowLeft') {
        // moveHeadLeft();
        goLeft()
    } else if (key == 'ArrowUp') {
        // moveHeadUp();
        goUp()
    } else if (key == 'ArrowDown') {
        // moveHeadDown();
        goDown()
    }
})

let move

function goRight() {
    clearMove()
    move = setInterval(moveHeadRight, 100);

}

function goLeft() {
    clearMove()
    move = setInterval(moveHeadLeft, 100);
}

function goUp() {
    clearMove()
    move = setInterval(moveHeadUp, 100);
}

function goDown() {
    clearMove()
    move = setInterval(moveHeadDown, 100);

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
        setRowStart(newFood, rowStart)
        setRowEnd(newFood, rowStart + 1)
        setColumnStart(newFood, columnStart)
        setColumnEnd(newFood, columnStart + 1)
        newFood.style.backgroundColor = 'blue'
        board.appendChild(newFood)

    } else {
        createFood()
    }

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}



createStartNode()