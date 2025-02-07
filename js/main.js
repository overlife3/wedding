// Получаем элементы аудио и кнопки
const audio = document.getElementById("audio");
const playButton = document.getElementById("audio-button");
const audioIcon = document.getElementById("audio-icon");

// Добавляем обработчик события на клик
playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play(); // Воспроизводим аудио
    playButton.style.backgroundColor = "var(--primary)";
    audioIcon.style.fill = "var(--secondary)";
  } else {
    audio.pause(); // Останавливаем аудио
    playButton.style.backgroundColor = "transparent";
    audioIcon.style.fill = "var(--primary)";
  }
});
