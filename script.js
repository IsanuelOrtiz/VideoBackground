     document.addEventListener('DOMContentLoaded', function() {
        var audio = document.getElementById("myAudio");
        var playBtn = document.getElementById("playBtn");

          function playAudio() {
               var audio = document.getElementById('myAudio');
               audio.play();
           }
           
           function pauseAudio() {
                var audio = document.getElementById('myAudio');
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
                }

        playBtn.addEventListener('click', playPauseTrack);

        playBtn.innerHTML = audio.paused ? "Play" : "Pause";

        /*audio.addEventListener('play', function() {
            playBtn.innerHTML = "Pause";
        });

        audio.addEventListener('pause', function() {
            playBtn.innerHTML = "Play";
        });*/

