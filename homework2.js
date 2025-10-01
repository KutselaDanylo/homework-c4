const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");
function resizeImage(e) {
  const value = e.target.value;
  image.style.width = value + "px";
}
const debouncedResize = _.debounce(resizeImage, 150);
slider.addEventListener("input", debouncedResize);

const box = document.getElementById("box")
box.style.width = "50px"
box.style.height = "50px"
box.style.backgroundColor = "red"
box.style.position = "absolute"
function moveBox(e) {
  box.style.left = e.pageX + "px"
  box.style.top = e.pageY + "px"
}
const debouncedMove = _.debounce(moveBox, 100)
document.addEventListener("mousemove", debouncedMove)