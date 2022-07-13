const elementHeader = document.querySelector(".header");
const elementIntroduce = document.querySelector(".introduce");
console.log(elementHeader);

console.log(elementHeader.scrollTop + elementHeader.scrollHeight);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (
    window.scrollY >=
    elementIntroduce.scrollTop + elementIntroduce.scrollHeight
  ) {
    elementHeader.classList.add("header-fixed");
  } else {
    elementHeader.classList.remove("header-fixed");
  }
});
