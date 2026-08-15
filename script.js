document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');

    // Function to play the jazz music
    const playMusic = () => {
        if (music.paused) {
            music.volume = 0.5; // Starts the music at a comfortable 50% volume
            music.play();
        }
        // Removes the click listener so it doesn't try to restart the song every time you click
        document.removeEventListener('click', playMusic);
    };

    // Listens for the very first click anywhere on the screen
    document.addEventListener('click', playMusic);
});