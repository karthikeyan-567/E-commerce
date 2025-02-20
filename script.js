let indexn = 0;
let slides = document.getElementsByClassName("slide");
let lbtn = document.querySelector(".left");
let rbtn = document.querySelector(".right");
let slider = document.querySelector(".slider");

function showSlide(i) {
  if (i >= slides.length) {
    indexn = 0;
  }
  if (i < 0) {
    indexn = slides.length - 1;
  }
  slider.style.transform = `translateX(${-indexn * 1200}px)`;
}
lbtn.addEventListener("click", () => {
  indexn++;
  showSlide(indexn);
});
rbtn.addEventListener("click", () => {
  indexn--;
  showSlide(indexn);
});

let addCLose = document.querySelector(".addClose");
let add = document.querySelector("#ADD");
addCLose.addEventListener("click", () => {
  add.remove();
});
let favun = document.querySelectorAll(".favW");
let favch = document.querySelectorAll(".favR");

for (let i = 0; i < favun.length; i++) {
  favun[i].addEventListener("click", () => {
    favch[i].style.zIndex = "1";
    favch[i].style.zIndex = "5";
  });
}
for (let j = 0; j < favch.length; j++) {
  favch[j].addEventListener("click", () => {
    favch[j].style.zIndex = "1";
    favun[j].style.zIndex = "5";
  });
}

window.onload = function () {
  setTimeout(function () {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".overlay").style.display = "block";
  }, 3000);
};
function closePopup() {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}
