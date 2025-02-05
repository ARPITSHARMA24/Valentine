// JavaScript for Valentine's website functionalities
document.addEventListener("DOMContentLoaded", function() {
    const envelopes = document.querySelectorAll(".envelope");
    const letters = document.querySelectorAll(".letter-content");
    const closeButtons = document.querySelectorAll(".close");
    const audio = document.getElementById("audio-player");
    let trackIndex = 0;
    const tracks = [
        "track1.mp3",
        "track2.mp3",
        "track3.mp3",
        "track4.mp3"
    ];

    // Envelope click event
    function openLetter(day) {
        const today = new Date().getDate();
        if (day <= today) {
            document.getElementById(`letter${day}`).style.display = "block";
        } else {
            alert("This letter will unlock on its specific day!");
        }
    }

    // Close letter event
    function closeLetter(day) {
        document.getElementById(`letter${day}`).style.display = "none";
    }

    // Music player controls
    function togglePlayPause() {
        if (audio.paused) {
            audio.src = tracks[trackIndex];
            audio.play();
        } else {
            audio.pause();
        }
    }

    function nextTrack() {
        trackIndex = (trackIndex + 1) % tracks.length;
        audio.src = tracks[trackIndex];
        audio.play();
    }

    function prevTrack() {
        trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
        audio.src = tracks[trackIndex];
        audio.play();
    }

    // Relationship timer
    function updateLoveTimer() {
        const startDate = new Date("2022-02-14");
        const now = new Date();
        const difference = now - startDate;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.getElementById("love-timer").innerText = `Together for ${days} days`;
    }

    updateLoveTimer();
    setInterval(updateLoveTimer, 1000 * 60 * 60);

    // Exposing functions globally
    window.openLetter = openLetter;
    window.closeLetter = closeLetter;
    window.togglePlayPause = togglePlayPause;
    window.nextTrack = nextTrack;
    window.prevTrack = prevTrack;
});
