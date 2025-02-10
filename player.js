const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.querySelector('.air');
const playButtonText = playButton.querySelector('h1');
const audioStreamUrl = 'https://myradio24.org/mirshirok';

playButton.addEventListener('click', function() {
    if (audioPlayer.src !== audioStreamUrl || audioPlayer.paused) {
        audioPlayer.src = audioStreamUrl;
        audioPlayer.play().catch(function(error) {
            console.error("ОШИБКА?!", error);
        });
        playButton.classList.add('active');
        playButton.classList.remove('inactive');
        playButtonText.textContent = 'В ЭФИРЕ..';
        playButtonText.classList.add('blinking');
    } else {
        audioPlayer.src = '';
        audioPlayer.load();
        playButton.classList.remove('active');
        playButton.classList.add('inactive');
        playButtonText.textContent = 'ВКЛЮЧИТЬ!';
        playButtonText.classList.remove('blinking');
    }
});