const surveyForm = document.querySelector('[data-form="survey"]');

surveyForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const radios = document.querySelectorAll('input[type="radio"]');
  let radioGroupValue;

  for (let radio of radios) {
    if (radio.checked) {
      radioGroupValue = radio.value;
    }
  }

  const data = {
    name: document.getElementById("name").value,
    isPresent: radioGroupValue,
  };

  //   const response = await fetch("/api/survey", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  const response = await fetch("/api/init_bd");

  const result = await response.json();
  alert(result.message);
});
