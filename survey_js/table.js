const table = document.getElementById("table");
const loader = document.getElementById("loader");
const successIcon = document.getElementById("success-icon");
const errorMessage = document.getElementById("error-message");

getData();

async function getData() {
  table.style.display = "none";
  loader.style.display = "block";
  errorMessage.style.display = "none";

  const response = await fetch("/api/survey");
  const result = await response.json();

  if (response.ok) {
    table.style.display = "table";
    await setData(result);
  } else {
    errorMessage.style.display = "block";
    console.error(result.message);
  }
  loader.style.display = "none";
}

async function setData(data) {
  const tbody = table.querySelector("tbody");
  let rows = "";
  let count = 1;
  for (let obj of data) {
    rows += `<tr>
            <td class="border-r-2 border-[#cdcdcd] px-2 text-center pb-2">${count}</td>
            <td class="border-r-2 border-[#cdcdcd] px-2 text-center">
              ${obj.name}
            </td>
            <td class="px-2 text-center">${obj.ispresent}</td>
          </tr>`;
    ++count;
  }

  const safeHTML = DOMPurify.sanitize(rows);
  tbody.innerHTML = safeHTML;
}
