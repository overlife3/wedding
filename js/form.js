const surveyForm = document.querySelector('[data-form="survey"]');

surveyForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("/api/init_bd", {
    method: "POST",
  });
  const result = await response.json();
  alert(result.message);
});
