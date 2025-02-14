function f(e, n) {
  const t = [2, 0, 1, 1, 1, 2];
  let o;
  return (
    e % 100 > 4 && e % 100 < 20 ? (o = 2) : (o = t[Math.min(e % 10, 5)]), n[o]
  );
}
const d = document.querySelectorAll('[data-audio="audio"]');
for (let e of d) {
  const n = e.querySelector('[data-audio="audio-button"]'),
    t = e.querySelector('[data-audio="audio-play"]'),
    o = e.querySelector('[data-audio="audio-icon"]');
  n.addEventListener("click", () => {
    p(e, d), t.paused ? y(t, n, o) : u(t, n, o);
  });
}
function y(e, n, t) {
  e.play(), (n.style.backgroundColor = "transparent"), (t.style.fill = "white");
}
function u(e, n, t) {
  e.pause(),
    (n.style.backgroundColor = "white"),
    (t.style.fill = "var(--primary)");
}
function p(e, n) {
  for (let t of n)
    if (t !== e) {
      const o = t.querySelector('[data-audio="audio-button"]'),
        a = t.querySelector('[data-audio="audio-play"]'),
        s = t.querySelector('[data-audio="audio-icon"]');
      u(a, o, s);
    }
}
function l(e) {
  e.classList.remove("flex"), e.classList.add("hidden");
}
function h(e) {
  e.classList.remove("hidden"),
    e.classList.add("flex"),
    console.log("open modal");
}
function S(e, n) {
  const t = document.querySelectorAll('[data-open-modal-id="open-modal-map"]'),
    o = document.querySelector('[data-modal-id="modal-map"]'),
    a = o.querySelector('[data-modal="cross"]');
  for (let s of t) s.addEventListener("click", () => h(o));
  a.addEventListener("click", () => l(o)),
    o.addEventListener("click", (s) => {
      s.target.closest('[data-modal="window"]') || l(o);
    });
}
S();
function i(e, n, t) {
  const a = document
      .getElementById(e)
      .querySelector('[data-timer="progress-circle"]'),
    r = 2 * Math.PI * 28,
    m = r - (t / n) * r;
  (a.style.strokeDashoffset = m),
    (a.style.strokeDasharray = r),
    (a.style.transition = "stroke-dashoffset 0.5s"),
    setTimeout(() => {
      a.style.transition = "none";
    }, 500);
}
function v() {
  const t = new Date("2025-05-17T00:00:00") - new Date(),
    o = Math.floor(t / (1e3 * 60 * 60 * 24)),
    a = Math.floor((t % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
    s = Math.floor((t % (1e3 * 60 * 60)) / (1e3 * 60)),
    r = Math.floor((t % (1e3 * 60)) / 1e3);
  return [o, a, s, r];
}
function c(e, n, t) {
  const o = document.getElementById(e),
    a = o.querySelector('[data-timer="value"]'),
    s = o.querySelector('[data-timer="measurement"]');
  (a.textContent = n), (s.textContent = f(n, t));
}
function q() {
  const e = v(),
    n = e[0],
    t = e[1],
    o = e[2],
    a = e[3];
  c("timer-day", n, ["день", "дня", "дней"]),
    i("timer-day", 365, n),
    c("timer-hour", t, ["час", "часа", "часов"]),
    i("timer-hour", 24, t),
    c("timer-minute", o, ["минута", "минуты", "минут"]),
    i("timer-minute", 60, o),
    c("timer-second", a, ["секунда", "секунды", "секунд"]),
    i("timer-second", 60, a);
}
setInterval(q, 1e3);
const D = document.querySelector('[data-form="survey"]');
D.addEventListener("submit", async (e) => {
  e.preventDefault();
  const n = document.querySelectorAll('input[type="radio"]');
  let t;
  for (let r of n) r.checked && (t = r.value);
  const o = { name: document.getElementById("name").value, isPresent: t },
    s = await (
      await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o),
      })
    ).json();
  alert(s.message);
});
