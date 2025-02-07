export function pluralize(number, forms) {
  const cases = [2, 0, 1, 1, 1, 2]; // Правила для выбора формы
  let index;

  // Определяем правильную форму
  if (number % 100 > 4 && number % 100 < 20) {
    index = 2; // Для чисел от 5 до 19
  } else {
    index = cases[Math.min(number % 10, 5)]; // Для остальных случаев
  }

  return forms[index];
}
