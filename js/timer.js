function setCircleProperties(elemId, timeFull, timeLeft) {
  const elem = document.getElementById(elemId);
  const circle = elem.querySelector('[data-timer="progress-circle"]');
  const radius = 28;
  const circumference = 2 * Math.PI * radius; // Длина окружности
  // Вычисляем stroke-dashoffset для текущего времени
  const offset = circumference - (timeLeft / timeFull) * circumference;
  circle.style.strokeDashoffset = offset;
  circle.style.strokeDasharray = circumference;

  // Добавляем "импульсный" эффект
  circle.style.transition = "stroke-dashoffset 0.5s";
  setTimeout(() => {
    circle.style.transition = "none"; // Сбрасываем transition для резкого изменения
  }, 500);
}

function getTimeDifference() {
  const startDate = new Date("2025-05-17T00:00:00"); // Например, 1 января 2023 года

  // Получите текущее время
  const now = new Date();

  // Вычислите разницу в миллисекундах
  const timeDifference = startDate - now;

  // Преобразуйте разницу в дни, часы, минуты и секунды
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

function setTimerValueForBlock(elemId, value, measurementForms) {
  const elem = document.getElementById(elemId);
  const output = elem.querySelector('[data-timer="value"]');
  const measurement = elem.querySelector('[data-timer="measurement"]');

  output.textContent = value;
  measurement.textContent = pluralize(value, measurementForms);
}

function updateTimer() {
  const timeArr = getTimeDifference();
  const dayDifference = timeArr[0];
  const hourDifference = timeArr[1];
  const minuteDifference = timeArr[2];
  const secondDifference = timeArr[3];

  setTimerValueForBlock("timer-day", dayDifference, ["день", "дня", "дней"]);
  setCircleProperties("timer-day", 365, dayDifference);

  setTimerValueForBlock("timer-hour", hourDifference, ["час", "часа", "часов"]);
  setCircleProperties("timer-hour", 24, hourDifference);

  setTimerValueForBlock("timer-minute", minuteDifference, [
    "минута",
    "минуты",
    "минут",
  ]);
  setCircleProperties("timer-minute", 60, minuteDifference);

  setTimerValueForBlock("timer-second", secondDifference, [
    "секунда",
    "секунды",
    "секунд",
  ]);
  setCircleProperties("timer-second", 60, secondDifference);
}

setInterval(updateTimer, 1000);
