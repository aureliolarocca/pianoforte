const tastiB = document.querySelectorAll(".tasto-bianco");

tastiB.forEach((tasto) => {
  tasto.addEventListener("click", () => {
    tasto.classList.add("active");
    const nota = tasto.dataset.note;
    const audio = document.getElementById(nota);
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      tasto.classList.remove("active");
    }, 200);
  });
});

document.addEventListener("keydown", (e) => {
  const tastoPremuto = e.key.toLowerCase();

  const tastoCorrispondente = document.querySelector(
    `.tasto-bianco[data-key="${tastoPremuto}"]`
  );

  if (tastoCorrispondente) {
    const nota = tastoCorrispondente.dataset.note;
    suona(nota);

    tastoCorrispondente.classList.add("active");

    setTimeout(() => {
      tastoCorrispondente.classList.remove("active");
    }, 200);
  }
});

function suona(nota) {
  const audio = document.getElementById(nota);
  audio.currentTime = 0;
  audio.play();
}
