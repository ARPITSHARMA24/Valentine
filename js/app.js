document.addEventListener("DOMContentLoaded", function () {
    const envelopes = document.querySelectorAll(".envelope");
    const letters = document.querySelectorAll(".letter-content");
    const closeButtons = document.querySelectorAll(".close");
    const loveTimer = document.getElementById("love-timer");
    const audioPlayer = document.getElementById("audio-player");
    const playButton = document.getElementById("playButton");
    let trackIndex = 0;
    
    const tracks = [
        "track1.mp3",
        "track2.mp3",
        "track3.mp3",
        "track4.mp3"
    ];
    
    // Function to open a letter
    function openLetter(index) {
        letters[index - 1].style.display = "block";
    }
    
    // Function to close a letter
    function closeLetter(index) {
        letters[index - 1].style.display = "none";
    }
    
    // Add event listeners to envelopes
    envelopes.forEach((envelope, index) => {
        envelope.addEventListener("click", function () {
            const today = new Date().getDate();
            if (index + 1 <= today) {
                openLetter(index + 1);
            } else {
                alert("This letter will unlock on its specific day!");
            }
        });
    });
    
    // Add event listeners to close buttons
    closeButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            closeLetter(index + 1);
        });
    });
    
    // Function to update love timer
    function updateLoveTimer() {
        const startDate = new Date("2022-02-14"); // Set your actual relationship start date
        const now = new Date();
        const difference = now - startDate;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        loveTimer.innerText = `Together for ${days} days`;
    }
    updateLoveTimer();
    setInterval(updateLoveTimer, 1000 * 60 * 60);
    
    // Music Player Functions
    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.src = tracks[trackIndex];
            audioPlayer.play();
            playButton.innerText = "Pause";
        } else {
            audioPlayer.pause();
            playButton.innerText = "Play";
        }
    }
    
    function nextTrack() {
        trackIndex = (trackIndex + 1) % tracks.length;
        audioPlayer.src = tracks[trackIndex];
        audioPlayer.play();
    }
    
    function prevTrack() {
        trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
        audioPlayer.src = tracks[trackIndex];
        audioPlayer.play();
    }
    
    // Attach event listeners for music controls
    playButton.addEventListener("click", togglePlayPause);
    document.getElementById("next").addEventListener("click", nextTrack);
    document.getElementById("prev").addEventListener("click", prevTrack);
});

