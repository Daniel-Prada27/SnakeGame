let board = document.getElementById('game-board');

let snakeArr = [];
let k = 1;
function createNode() {
    let node = document.createElement('div');
    node.style.backgroundColor = "red"
    setRowStart(node, k)
    setRowEnd(node, k)
    setColumnStart(node, k)
    setColumnEnd(node, k)

    snakeArr.push(node);
    board.appendChild(node)
    k++
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
