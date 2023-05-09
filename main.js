const btnPregunta = document.querySelector("#pregunta"),
  btnPregunta2 = document.querySelector("#pregunta2"),
  btnPregunta3 = document.querySelector("#pregunta3"),
  resp = document.querySelector("#respuesta"),
  resp2 = document.querySelector("#respuesta2"),
  btnPregunta0 = document.querySelector("#pregunta0"),
  resp0 = document.querySelector("#respuesta0"),
  resp3 = document.querySelector("#respuesta3");

btnPregunta.addEventListener("click", () => {
  if (resp.style.display == "block") {
    resp.style.display = "none";
  } else {
    resp.style.display = "block";
  }
});
btnPregunta2.addEventListener("click", () => {
  if (resp2.style.display == "block") {
    resp2.style.display = "none";
  } else {
    resp2.style.display = "block";
  }
});
btnPregunta3.addEventListener("click", () => {
  if (resp3.style.display == "block") {
    resp3.style.display = "none";
  } else {
    resp3.style.display = "block";
  }
});

btnPregunta0.addEventListener("click", () => {
  if (resp0.style.display == "block") {
    resp0.style.display = "none";
  } else {
    resp0.style.display = "block";
  }
});

const btnRespo = document.querySelector("#btnRespo"),
  desplegar = document.querySelector("#desplegar"),
  cerrar1 = document.querySelector("#cerrar1"),
  cerrar2 = document.querySelector("#cerrar2"),
  cerrar3 = document.querySelector("#cerrar3"),
  cerrar4 = document.querySelector("#cerrar4");

btnRespo.addEventListener("click", () => {
  if (desplegar.style.display == "grid") {
    desplegar.style.display = "none";
  } else {
    desplegar.style.display = "grid";
  }
});

cerrar1.addEventListener("click", () => {
  desplegar.style.display = "none";
});

cerrar2.addEventListener("click", () => {
  desplegar.style.display = "none";
});

cerrar3.addEventListener("click", () => {
  desplegar.style.display = "none";
});

cerrar4.addEventListener("click", () => {
  desplegar.style.display = "none";
});
