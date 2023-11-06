const logOutBtn = document.getElementById('logOut-btn');

logOutBtn.addEventListener('click', toMainPage);

function toMainPage() {
    let a = document.createElement('a');
    a.href = '../../index.html';
    a.click()
}