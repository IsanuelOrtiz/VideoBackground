document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("myAudio");
    var playBtn = document.getElementById("playBtn");

    playBtn.addEventListener('click', toggleAudio);

    playBtn.innerHTML = audio.paused ? "Pause" : "Play";
});
