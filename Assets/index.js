document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("myAudio");
    var playBtn = document.getElementById("playBtn");

    function playAudio() {
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
    }

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = "Pause";
        } else {
            audio.pause();
            playBtn.innerHTML = "Play";
        }
    }

    // Add event listener for play/pause button
    playBtn.addEventListener('click', toggleAudio);

    // Set initial button text based on audio state
    playBtn.innerHTML = audio.paused ? "Play" : "Pause";
});
