const s = document.getElementById("table"),
  r = document.getElementById("loader");
document.getElementById("success-icon");
const d = document.getElementById("error-message");
l();
async function l() {
  (s.style.display = "none"),
    (r.style.display = "block"),
    (d.style.display = "none");
  const e = await fetch("/api/survey"),
    t = await e.json();
  e.ok
    ? ((s.style.display = "table"), await y(t))
    : ((d.style.display = "block"), console.error(t.message)),
    (r.style.display = "none");
}
async function y(e) {
  const t = s.querySelector("tbody");
  let o = "",
    n = 1;
  for (let c of e)
    (o += `<tr>
            <td class="border-r-2 border-[#cdcdcd] px-2 text-center pb-2">${n}</td>
            <td class="border-r-2 border-[#cdcdcd] px-2 text-center">
              ${c.name}
            </td>
            <td class="px-2 text-center">${c.ispresent}</td>
          </tr>`),
      ++n;
  const a = DOMPurify.sanitize(o);
  t.innerHTML = a;
}
