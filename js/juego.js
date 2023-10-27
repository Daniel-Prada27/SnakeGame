let board = document.getElementById('game-board');

let snakeArr = board.childNodes;
let head;

function createStartNode() {
    let node = document.createElement('div');
    node.style.backgroundColor = "red"
    setRowStart(node, 11)
    setRowEnd(node, 12)
    setColumnStart(node, 11)
    setColumnEnd(node, 12)

    node.classList.add('position-11-11');
    boardAppend(node);
}

function boardAppend(node) {
    board.appendChild(node);
    head = snakeArr[snakeArr.length - 1]
}

function createNode() {
    let node = document.createElement('div');
    node.style.backgroundColor = "red"
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

    let newPosition = document.querySelector(`.position-${newHead.style.gridRowStart}-${newHead.style.gridColumnStart}`)
    
    if ((parseInt(head.style.gridRowStart) == 21) || (newPosition != null)) {
        console.log("YOU LOSE");
        return;
    }

    newHead.classList.add(`position-${newHead.style.gridRowStart}-${newHead.style.gridColumnStart}`)

    boardAppend(newHead);
}

function moveHeadUp() {
    let newHead = createNode();

    setRowStart(newHead, parseInt(head.style.gridRowStart) - 1)
    setRowEnd(newHead, parseInt(head.style.gridRowEnd) - 1)
    setColumnStart(newHead, head.style.gridColumnStart)
    setColumnEnd(newHead, head.style.gridColumnStart)

    let newPosition = document.querySelector(`.position-${newHead.style.gridRowStart}-${newHead.style.gridColumnStart}`)
    
    if ((parseInt(head.style.gridRowStart) == 1) || (newPosition != null)) {
        console.log("YOU LOSE");
        return;
    }

    newHead.classList.add(`position-${newHead.style.gridRowStart}-${newHead.style.gridColumnStart}`)

    boardAppend(newHead);
}

function moveHeadRight() {
    let newHead = createNode();

    setRowStart(newHead, head.style.gridRowStart)
    setRowEnd(newHead, head.style.gridRowEnd)
    setColumnStart(newHead, parseInt(head.style.gridColumnStart) + 1)
    setColumnEnd(newHead, parseInt(head.style.gridColumnStart) + 1)

    let newPosition = document.querySelector(`.position-${newHead.style.gridRowStart}-${newHead.style.gridColumnStart}`)
    
    if ((parseInt(head.style.gridColumnStart) == 21) || (newPosition != null)) {
        console.log("YOU LOSE");
        return;
    }

    newHead.classList.add(`position-${newHead.style.gridRowStart}-${newHead.style.gridColumnStart}`)

    boardAppend(newHead);
}

function moveHeadLeft() {
    let newHead = createNode();

    setRowStart(newHead, head.style.gridRowStart)
    setRowEnd(newHead, head.style.gridRowEnd)
    setColumnStart(newHead, parseInt(head.style.gridColumnStart) - 1)
    setColumnEnd(newHead, parseInt(head.style.gridColumnStart) - 1)

    let newPosition = document.querySelector(`.position-${newHead.style.gridRowStart}-${newHead.style.gridColumnStart}`)
    
    if ((parseInt(head.style.gridColumnStart) == 1) || (newPosition != null)) {
        console.log("YOU LOSE");
        return;
    }

    newHead.classList.add(`position-${newHead.style.gridRowStart}-${newHead.style.gridColumnStart}`)

    boardAppend(newHead);
}

window.addEventListener('keydown', (event) => {
    let key = event.code;
    console.log(event.code);
    if (key == 'ArrowRight') {
        moveHeadRight();
    } else if (key == 'ArrowLeft') {
        moveHeadLeft();
    } else if (key == 'ArrowUp') {
        moveHeadUp();
    } else if (key == 'ArrowDown') {
        moveHeadDown();
    }

    

})

createStartNode()