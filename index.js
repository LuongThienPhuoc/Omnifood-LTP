const elementHeader = document.querySelector(".header");
const elementIntroduce = document.querySelector(".introduce");
console.log(elementHeader);

console.log(elementHeader.scrollTop + elementHeader.scrollHeight);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >=
    elementIntroduce.scrollTop + elementIntroduce.scrollHeight
  ) {
    elementHeader.classList.add("header-fixed");
  } else {
    elementHeader.classList.remove("header-fixed");
  }
});

const btnMenu = document.querySelector(".btn-menu-tablet");
const elementModalMobile = document.querySelector(".modal-header-mobile");
btnMenu.addEventListener("click", () => {
  elementModalMobile.classList.remove("hide");
});

const btnOut = document.querySelector(".btn-out");
btnOut.addEventListener("click", () => {
  elementModalMobile.classList.add("hide");
});

const listBtnMobile = document.querySelectorAll(".nav-item-mobile");

for (let i = 0; i < listBtnMobile.length; i++) {
  listBtnMobile[i].addEventListener("click", () => {
    elementModalMobile.classList.add("hide");
  });
}
