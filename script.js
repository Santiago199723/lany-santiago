document.getElementById('showMessageBtn').addEventListener('click', function() {
    // Reproduzir o áudio ao clicar no botão
    var audio = document.getElementById('audio');
    audio.play();

    // Mostrar a mensagem
    document.getElementById('message').classList.toggle('hidden');

    // Aumentar o tamanho e aplicar estilo à imagem
    var image = document.querySelector('.images img');
    image.classList.add('enlarged');
    image.style.width = '350px'; // Defina o tamanho desejado
    image.style.height = '350px'; // Mantenha a proporção

    // Esconder o botão
    this.style.display = 'none';
});


function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '0';
    heart.style.setProperty('--random-x', `${Math.random() * 400 - 200}px`);
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    document.querySelector('.hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
