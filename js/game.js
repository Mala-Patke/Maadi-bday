const localData = data[window.location.search.split("=")[1]];

let gameState = {
    correct: 0,
    guessesLeft: 4,
    points: 0
}

window.onload = () => {
    document.getElementById('question').innerText = localData.question;

    let pointsPer = 10000;
    for(let question of localData.answers) {
        let holder = document.createElement('li');
        let text = document.createElement('div');
        let textNode = document.createTextNode(question);
        let score = document.createElement('div');
        let scoreNode = document.createTextNode(pointsPer);
        let checkbox = document.createElement('input');
        pointsPer -= 1000;
        
        text.append(textNode.cloneNode(true));
        score.append(scoreNode.cloneNode(true));
        text.classList.add('answerText');
        score.classList.add('answerScore');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('hidden', '');

        holder.appendChild(checkbox);
        holder.appendChild(text);
        holder.appendChild(score);
        holder.classList.add('answer');

        document.getElementById('answerList').appendChild(holder);
    }
}

function handleGameOver() {
    document.getElementById('input').setAttribute('disabled', '');
    document.getElementById('gohome').removeAttribute('hidden');

    let globalPoints = localStorage.getItem('points');
    localStorage.setItem('points', parseInt(globalPoints) + gameState.points);

    let gamesLeft = localStorage.getItem('gamesLeft');
    localStorage.setItem('gamesLeft', parseInt(gamesLeft) - 1);
}

function handleSubmission() {
    let response = document.getElementById('input').value.toLowerCase();
    document.getElementById('input').value = "";

    if(localData.answers.map(e => e.toLowerCase()).includes(response)) {
        gameState.correct++;
        let correctElement = Array.from(document.getElementsByClassName('answerText'))
            .find(e => e.innerText.toLowerCase() === response);
        correctElement.parentElement.children[0].checked = true;
        
        let pointsEarned = parseInt(correctElement.parentElement.children[2].innerText);
        document.getElementById('localPoints').innerText = pointsEarned + parseInt(document.getElementById('localPoints').innerText);
        gameState.points += pointsEarned;
    } else {
        gameState.guessesLeft--;
        document.getElementById('strikeText').innerText += 'X'
    }

    if(gameState.guessesLeft === 0) {
        handleGameOver();
        for(let elem of document.getElementsByClassName('answerText')) {
            elem.removeAttribute('hidden');
        }
    }

    if(gameState.correct === localData.answers.length) handleGameOver();
}

document.getElementById('submit').addEventListener('click', handleSubmission);
document.addEventListener('keypress', e => e.key === 'Enter' ? handleSubmission() : '');