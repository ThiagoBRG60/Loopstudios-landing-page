const hamburguer = document.getElementById("hamburguer");
const hamburguerMenu = document.getElementById("hamburguer-menu");
const closeBtn = document.getElementById("close-button");

hamburguer.addEventListener("click", () => {
  hamburguerMenu.classList.add("selected");
});

closeBtn.addEventListener('click', () => {
  hamburguerMenu.classList.remove('selected')
})
