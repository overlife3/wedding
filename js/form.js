const surveyForm = document.querySelector('[data-form="survey"]');

surveyForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loader = surveyForm.querySelector('[data-form="survey"]');
  const successIcon = surveyForm.querySelector('[data-form="success-icon"]');
  const errorMessage = surveyForm.querySelector('[data-form="error-message"]');

  loader.style.display = "block";
  successIcon.style.display = "none";
  errorMessage.style.display = "none";
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

  const response = await fetch("/api/survey", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  //   const response = await fetch("/api/init_bd", {
  //     method: "POST",
  //   });

  const result = await response.json();
  loader.style.display = "none";
  if (response.ok) {
    successIcon.style.display = "flex";
  } else {
    errorMessage.style.display = "block";
    console.error(result.message);
  }
});
