import { checkForFood, checkForObstacle } from "./checkers.js";
import { createNode, boardAppend, boardRemove, lose } from "./boardManipulation.js";
import { setRowStart, setRowEnd, setColumnStart, setColumnEnd } from "./nodeManipulation.js";

export let direction;
let snakeSpeed = 99;

export function moveHeadUp(player) {
    let newHead = createNode();
    player.direction = 'up';

    setRowStart(newHead, parseInt(player.head.style.gridRowStart) - 1);
    setRowEnd(newHead, parseInt(player.head.style.gridRowEnd) - 1);
    setColumnStart(newHead, player.head.style.gridColumnStart);
    setColumnEnd(newHead, player.head.style.gridColumnStart);

    moveAction(newHead, player.head.style.gridRowStart, 1);


}

export function moveHeadDown(player) {
    let newHead = createNode();
    player.direction = 'down';

    setRowStart(newHead, parseInt(player.head.style.gridRowStart) + 1);
    setRowEnd(newHead, parseInt(player.head.style.gridRowEnd) + 1);
    setColumnStart(newHead, player.head.style.gridColumnStart);
    setColumnEnd(newHead, player.head.style.gridColumnStart);

    moveAction(newHead, player.head.style.gridRowStart, 21);

}

export function moveHeadRight(player) {
    let newHead = createNode();
    player.direction = 'right';

    setRowStart(newHead, player.head.style.gridRowStart);
    setRowEnd(newHead, player.head.style.gridRowEnd);
    setColumnStart(newHead, parseInt(player.head.style.gridColumnStart) + 1);
    setColumnEnd(newHead, parseInt(player.head.style.gridColumnStart) + 1);

    moveAction(newHead, player.head.style.gridColumnStart, 21);

}

export function moveHeadLeft(player) {
    let newHead = createNode();
    player.direction = 'left';

    setRowStart(newHead, player.head.style.gridRowStart);
    setRowEnd(newHead, player.head.style.gridRowEnd);
    setColumnStart(newHead, parseInt(player.head.style.gridColumnStart) - 1);
    setColumnEnd(newHead, parseInt(player.head.style.gridColumnStart) - 1);

    moveAction(newHead, player.head.style.gridColumnStart, 1);

}

export function goRight(player) {
    moveHeadRight(player)
    clearMove(player);
    player.move = setInterval(() => {moveHeadRight(player)}, snakeSpeed);
}

export function goLeft(player) {
    moveHeadLeft(player);
    clearMove(player);
    player.move = setInterval(()=> {moveHeadLeft(player)}, snakeSpeed);
}

export function goUp(player) {
    moveHeadUp(player);
    clearMove(player);
    player.move = setInterval(()=> {moveHeadUp(player)}, snakeSpeed);
}

export function goDown(player) {
    moveHeadDown(player);
    clearMove(player);
    player.move = setInterval(()=> {moveHeadDown(player)}, snakeSpeed);

}

export function clearMove(player) {
    clearInterval(player.move);
}

export function setDirection(player, newDirection) {
    player.direction = newDirection;
}

function moveAction(player, node, property, number) {
    let rowStart = node.style.gridRowStart;
    let colStart = node.style.gridColumnStart;

    if ((parseInt(property) == number) || (player.checkForCollision(rowStart, colStart))) {
        console.log(`${player.snakeColor} LOSES`);
        lose();
        return;
    } else if (checkForFood(rowStart, colStart)) {
        if (player.snakeColor == 'red') {
            node.classList.add(`position-${rowStart}-${colStart}`);
        } else {
        node.classList.add(`position2-${rowStart}-${colStart}`);
        }
        player.snakeArr.push(node);
        boardAppend(node, player);
    } else if (checkForObstacle(rowStart, colStart)) {
        lose();
    } else {
        if (player.snakeColor == 'red') {
            node.classList.add(`position-${rowStart}-${colStart}`);
        } else {
        node.classList.add(`position2-${rowStart}-${colStart}`);
        }
        player.snakeArr.push(node);
        boardAppend(node, player);
        removeTail(player);
    }
}

function removeTail(player) {
    player.snakeArr[0].style.visibility = 'hidden';
    boardRemove(player.snakeArr[0]);
    player.snakeArr.shift();
}