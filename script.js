// Add this file to the 'js' directory as app.js

document.addEventListener("DOMContentLoaded", function() {
    updateLoveTimer();
    setInterval(updateLoveTimer, 1000);
});

function updateLoveTimer() {
    const startDate = new Date("2020-02-14T00:00:00"); // Adjust this to your relationship start date
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("love-timer").innerText = `We've been in love for ${days} days!`;
}

function openLetter(day) {
    const today = new Date().getDate();
    if (day > today) {
        alert("This letter is locked! Wait for the correct day.");
        return;
    }
    const letter = document.getElementById(`letter${day}`);
    letter.style.display = "block";
}

function closeLetter(day) {
    const letter = document.getElementById(`letter${day}`);
    letter.style.display = "none";
}

let currentTrack = 0;
const tracks = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3"];
const audioPlayer = document.getElementById("audio-player");

audioPlayer.src = tracks[currentTrack];

togglePlayPause = () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
};

nextTrack = () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    audioPlayer.src = tracks[currentTrack];
    audioPlayer.play();
};

prevTrack = () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    audioPlayer.src = tracks[currentTrack];
    audioPlayer.play();
};
