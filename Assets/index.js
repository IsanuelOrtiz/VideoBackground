document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("myAudio");
    var playBtn = document.getElementById("playBtn");

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = "⏸️Pause";
        } else {
            audio.pause();
            playBtn.innerHTML = "▶️Play";
        }
    }

    playBtn.addEventListener('click', toggleAudio);

    playBtn.innerHTML = audio.paused ? "Pause" : "Play";
});
