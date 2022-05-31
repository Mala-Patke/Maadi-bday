window.onload = () => {
    if(!localStorage.getItem('gamesLeft')) localStorage.setItem('gamesLeft', 8);
    document.getElementById('gamesLeft').innerText = localStorage.getItem('gamesLeft');

    if(!localStorage.getItem('points')) localStorage.setItem('points', 0);
    document.getElementById('points').innerText = localStorage.getItem('points');

    for(let button of document.getElementsByTagName('button')) {
        button.addEventListener('click', () => {
            window.location.href = `/Maadi-bday/game.htm?code=${button.getAttribute('code')}`
        });
    }
};