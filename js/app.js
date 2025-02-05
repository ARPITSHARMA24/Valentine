
// JavaScript for Valentine's website functionalities
document.addEventListener("DOMContentLoaded", function () {
    alert("JavaScript Loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
    const envelopes = document.querySelectorAll(".envelope");
    const letters = document.querySelectorAll(".letter-content");
    const closeButtons = document.querySelectorAll(".close");
    const audio = new Audio();
    let trackIndex = 0;
    const tracks = [
        "track1.mp3",
        "track2.mp3",
        "track3.mp3",
        "track4.mp3"
    ];

    // Envelope click event
    envelopes.forEach((envelope, index) => {
        envelope.addEventListener("click", function () {
            // Open corresponding letter if it's the correct day
            const today = new Date().getDate();
            if (index + 1 <= today) {
                letters[index].style.display = "block";
            } else {
                alert("This letter will unlock on its specific day!");
            }
        });
    });

    // Close letter event
    closeButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            letters[index].style.display = "none";
        });
    });

    // Music player controls
    document.getElementById("play").addEventListener("click", function () {
        if (audio.paused) {
            audio.src = tracks[trackIndex];
            audio.play();
        } else {
            audio.pause();
        }
    });

    document.getElementById("next").addEventListener("click", function () {
        trackIndex = (trackIndex + 1) % tracks.length;
        audio.src = tracks[trackIndex];
        audio.play();
    });

    document.getElementById("prev").addEventListener("click", function () {
        trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
        audio.src = tracks[trackIndex];
        audio.play();
    });

    // Relationship timer
    function updateLoveTimer() {
        const startDate = new Date("2022-02-14"); // Set your actual relationship start date
        const now = new Date();
        const difference = now - startDate;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.getElementById("love-timer").innerText = `Together for ${days} days`;
    }
    updateLoveTimer();
    setInterval(updateLoveTimer, 1000 * 60 * 60);
});
