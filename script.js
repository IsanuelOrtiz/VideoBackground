     document.addEventListener('DOMContentLoaded', function() {
        const audio = document.getElementById("myAudio");
        const playBtn = document.getElementById("playBtn");
        
        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                playBtn.innerHTML = "Pause";
            } else {
                audio.pause();
                playBtn.innerHTML = "Play";
            }
        }
                }

        playBtn.addEventListener('click', playPauseTrack);

        playBtn.innerHTML = audio.paused ? "Play" : "Pause";

        /*audio.addEventListener('play', function() {
            playBtn.innerHTML = "Pause";
        });

        audio.addEventListener('pause', function() {
            playBtn.innerHTML = "Play";
        });*/

