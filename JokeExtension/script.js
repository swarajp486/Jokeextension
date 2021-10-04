
fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then( jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement=document.getElementById('jokeElement');
    jokeElement.innerHTML=jokeText;
});


document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('b1');
    checkButton.addEventListener('click', function() {
        
            fetch('https://icanhazdadjoke.com/slack')
                .then(data => data.json())
                .then( jokeData => {
                    const jokeText = jokeData.attachments[0].text;
                    const jokeElement=document.getElementById('jokeElement');
                    jokeElement.innerHTML=jokeText;
                })
            
    }, false);
  }, false);
