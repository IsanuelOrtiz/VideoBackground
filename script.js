     document.addEventListener('DOMContentLoaded', function() {
    const audioPlayerContainer = document.getElementById('audioPlayerContainer');

    audioPlayerContainer.innerHTML = `
        <audio id="myAudio" autoplay loop>
            <source src="Assets/Game Setting Battle (bddcb56b19db47c3a3d4972e574d659c).mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <button id="playBtn" class="audio-btn">Pause</button>
    `;
        const audio = document.getElementById("myAudio");
        const playBtn = document.getElementById("playBtn");
        
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

