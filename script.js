document.getElementById('showMessageBtn').addEventListener('click', function() {
    // Reproduzir o áudio ao clicar no botão
    var audio = document.getElementById('audio');
    audio.play();

    // Mostrar a mensagem
    document.getElementById('message').classList.toggle('hidden');


    // Esconder o botão
    this.style.display = 'none';
});


function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '0';
    heart.style.setProperty('--random-x', `${Math.random() * 200 - 100}px`);
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    document.querySelector('.hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
