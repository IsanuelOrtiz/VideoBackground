<script>
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

        // Check if autoplay was successful
        audio.addEventListener('play', function() {
            playBtn.textContent = "Pause";
        });

        audio.addEventListener('pause', function() {
            playBtn.textContent = "Play";
        });
       </script>
