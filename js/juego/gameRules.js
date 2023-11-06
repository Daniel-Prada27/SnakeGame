
export let obstacleBtn = document.getElementById('obstacleBtn');

export let allowObstacles = false;

obstacleBtn.addEventListener('click', changeObstaclePermission);

function changeObstaclePermission() {

    allowObstacles = !allowObstacles;

    if(allowObstacles) {
        obstacleBtn.style.backgroundColor = '#00FF41'
    } else {
        obstacleBtn.style.backgroundColor = '';

    }

}

export function disableObstacleBtn() {
    obstacleBtn.disabled = true;
}

export function enableObstacleBtn() {
    obstacleBtn.disabled = false;
}
