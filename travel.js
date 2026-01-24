const images = [
  "images/2.jpeg",
  "images/33.jpeg",
  "images/44.jpeg",
  "images/66.jpeg"
];

let index = 0;
const hero = document.getElementById("accueil");

setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url('${images[index]}')`;
}, 3000);

