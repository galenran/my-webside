document.addEventListener("DOMContentLoaded", function() {
    const musicToggle = document.getElementById("music-toggle");
    const bgMusic = document.getElementById("bg-music");

    musicToggle.addEventListener("click", function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = "🎵 停止音乐";
        } else {
            bgMusic.pause();
            musicToggle.textContent = "🎵 播放音乐";
        }
    });
});