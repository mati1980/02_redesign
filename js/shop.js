window.addEventListener("load", sidenVises);

const mere = document.querySelector("#mere");
const info = document.querySelector("#info");
const udvid = document.querySelector("#udvid");

function sidenVises() {
  console.log("sidenVises");
  info.classList.add("hide");
}

function visMere() {
  console.log("visMere");
  info.classList.toggle("hide");

  const infoHidden = info.classList.contains("hide");

  if (infoHidden) {
    udvid.textContent = "+";
  } else {
    udvid.textContent = "-";
  }
}
mere.addEventListener("click", visMere);
