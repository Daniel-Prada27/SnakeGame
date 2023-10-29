import { checkForSnake, checkForFood } from "./checkers.js";
import { createNode, boardAppend, boardRemove, lose, snakeArr, head } from "./boardManipulation.js";
import { setRowStart, setRowEnd, setColumnStart, setColumnEnd } from "./nodeManipulation.js";

export let direction;
let move;
let snakeSpeed = 99;

export function moveHeadUp() {
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

export function moveHeadDown() {
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

export function moveHeadRight() {
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

export function moveHeadLeft() {
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

export function goRight() {
    moveHeadRight();
    clearMove();
    move = setInterval(moveHeadRight, snakeSpeed);

}

export function goLeft() {
    moveHeadLeft();
    clearMove();
    move = setInterval(moveHeadLeft, snakeSpeed);
}

export function goUp() {
    moveHeadUp();
    clearMove();
    move = setInterval(moveHeadUp, snakeSpeed);
}

export function goDown() {
    moveHeadDown();
    clearMove();
    move = setInterval(moveHeadDown, snakeSpeed);

}

export function clearMove() {
    clearInterval(move);
}

export function setDirection(newDirection) {
    direction = newDirection;
}

function removeTail() {
    boardRemove(snakeArr[0]);
    snakeArr.shift();
}