        document.addEventListener('DOMContentLoaded', function() {
        var audio = document.getElementById("myAudio");
        var playBtn = document.getElementById("playBtn");
        
        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = "Pause";
            } else {
                audio.pause();
                playBtn.textContent = "Play";
            }
        }
                }

        playBtn.addEventListener('click', toggleAudio);


        audio.addEventListener('play', function() {
            playBtn.textContent = "Pause";
        });

        audio.addEventListener('pause', function() {
            playBtn.textContent = "Play";
        });

