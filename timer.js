let i = 0;
const update = setInterval(() => {
  window.localStorage.setItem("GUVI", i);
  i++;
}, 1000 * 2);

setTimeout(() => {
  clearInterval(update);
  // localStorage.clear();
  localStorage.removeItem("GUVI");
}, 1000 * 15);
