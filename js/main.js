const audioParents = document.querySelectorAll('[data-audio="audio"]');

// Добавляем обработчик события на клик
for (let audioParent of audioParents) {
  const playButton = audioParent.querySelector('[data-audio="audio-button"]');
  const audio = audioParent.querySelector('[data-audio="audio-play"]');
  const audioIcon = audioParent.querySelector('[data-audio="audio-icon"]');

  playButton.addEventListener("click", () => {
    pauseOtherAudio(audioParent, audioParents);
    if (audio.paused) {
      playAudio(audio, playButton, audioIcon);
    } else {
      pauseAudio(audio, playButton, audioIcon);
    }
  });
}

function playAudio(audio, playButton, audioIcon) {
  audio.play(); // Воспроизводим аудио
  playButton.style.backgroundColor = "transparent";
  audioIcon.style.fill = "white";
}

function pauseAudio(audio, playButton, audioIcon) {
  audio.pause(); // Останавливаем аудио
  playButton.style.backgroundColor = "white";
  audioIcon.style.fill = "var(--primary)";
}

// чтобы после того как начинает играть  аудио - все другие останавливались
function pauseOtherAudio(currentAudioParent, audioParents) {
  for (let audioParent of audioParents) {
    if (audioParent !== currentAudioParent) {
      const playButton = audioParent.querySelector(
        '[data-audio="audio-button"]'
      );
      const audio = audioParent.querySelector('[data-audio="audio-play"]');
      const audioIcon = audioParent.querySelector('[data-audio="audio-icon"]');
      pauseAudio(audio, playButton, audioIcon);
    }
  }
}
