const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  x = window.pageYOffset;
  if (x > 0) {
    header.classList.add("stiky");
  } else {
    header.classList.remove("stiky");
  }
});

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imageContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length;
let index = 0;
// console.log(imgPosition);

imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
  dotItem[index].addEventListener("click", function () {
    slider(index);
  });
});

function imgSlide() {
  index++;
  if (index >= imgNumber) {
    index = 0;
  }
  slider(index);
}

function slider(index) {
  imageContainer.style.left = "-" + index * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotItem[index].classList.add("active");
}

setInterval(imgSlide, 3000);

// Show Sidebar Category
const itemsliderbar = document.querySelectorAll(".category-left-li");

itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});

//Product
const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImgs = document.querySelectorAll(
  ".product-content-left-small-img img"
);
smallImgs.forEach(function (imgItem, x) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src;
  });
});

const info = document.querySelector(".info");
const detail = document.querySelector(".detail");
const preserve = document.querySelector(".preserve");

if (info) {
  info.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-info"
    ).style.display = "block";

    document.querySelector(
      ".product-content-right-bottom-content-detail"
    ).style.display = "none";

    document.querySelector(
      ".product-content-right-bottom-content-preserve"
    ).style.display = "none";
  });
}

if (detail) {
  detail.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-info"
    ).style.display = "none";

    document.querySelector(
      ".product-content-right-bottom-content-detail"
    ).style.display = "block";

    document.querySelector(
      ".product-content-right-bottom-content-preserve"
    ).style.display = "none";
  });
}

if (preserve) {
  preserve.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-info"
    ).style.display = "none";

    document.querySelector(
      ".product-content-right-bottom-content-detail"
    ).style.display = "none";

    document.querySelector(
      ".product-content-right-bottom-content-preserve"
    ).style.display = "block";
  });
}

const butTon = document.querySelector(".product-content-right-bottom-top");
if (butTon) {
  butTon.addEventListener("click", function () {
    document
      .querySelector(".product-content-right-bottom-content-big")
      .classList.toggle("activeB");
  });
}
