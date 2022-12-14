window.addEventListener("load", sidenVises);

const show = document.querySelector("#show");
const img = document.querySelector("#img");

function sidenVises() {
  console.log("sidenVises");
  img.classList.add("hide");
}

function showMore() {
  console.log("showMore");

  img.classList.toggle("hide");

  const imgHidden = img.classList.contains("hide");

  if (imgHidden) {
    show.textContent = "Show me more";
  } else {
    show.textContent = "Show me less";
  }
}

show.addEventListener("click", showMore);
