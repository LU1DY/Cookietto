const box = document.querySelector(".box");

function animarCaixa() {
  const scrollPosition = window.scrollY;
  const velocidade = 1;

  box.style.transform = `translateY(${scrollPosition * -velocidade}px)`;
}

window.addEventListener("scroll", animarCaixa);
