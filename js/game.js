const localData = data[window.location.search.split("=")[1]];

window.onload = () => {
    document.getElementById('question').innerText = localData.question;

    let pointsPer = 10000;
    for(let question of localData.answers) {
        let holder = document.createElement('li');
        let text = document.createElement('div');
        let textNode = document.createTextNode(question);
        let score = document.createElement('div');
        let scoreNode = document.createTextNode(pointsPer);
        pointsPer -= 1000;
        
        text.append(textNode.cloneNode(true));
        score.append(scoreNode.cloneNode(true));
        text.classList.add('answerText');
        score.classList.add('answerScore');

        holder.appendChild(text);
        holder.appendChild(score);
        holder.classList.add('answer');

        document.getElementById('answerList').appendChild(holder);
    }
}

document.getElementById('submit').addEventListener('click', () => {
    let response = document.getElementById('input').value;
    if(localData.answers.includes(response.toLowerCase())) {

    }
})