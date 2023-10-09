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
    node.style.gridColumnStart= columnStart;
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

    boardAppend(newHead);
}