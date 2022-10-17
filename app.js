const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("nav");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (bar) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

var big = document.getElementById("mainImg");
var small = document.getElementsByClassName("simg");

small[0].onclick = function () {
  big.src = small[0].src;
};
small[1].onclick = function () {
  big.src = small[1].src;
};
small[2].onclick = function () {
  big.src = small[2].src;
};
small[3].onclick = function () {
  big.src = small[3].src;
};
