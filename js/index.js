window.onload = () => {
    if(!localStorage.getItem('gamesLeft')) localStorage.setItem('gamesLeft', 4);
    document.getElementById('gamesLeft').innerText = localStorage.getItem('gamesLeft');

    if(!localStorage.getItem('points')) localStorage.setItem('points', 0);
    document.getElementById('points').innerText = localStorage.getItem('points');

};