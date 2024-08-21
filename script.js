window.addEventListener('load', function() {
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log('Autoplay was prevented. The user needs to interact with the page first.');
    });
});
