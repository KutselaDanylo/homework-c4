// const images = document.querySelectorAll("img[data-src]");
// images.forEach(img => {
//   img.style.height = "200px";
//   img.style.backgroundColor = "#f0f0f0";
//   img.style.display = "block";
//   img.style.marginBottom = "20px";
//   img.style.transition = "opacity 0.5s ease";
//   img.style.opacity = "0";
// });
// function loadImage(img) {
//   const src = img.getAttribute("data-src");
//   if (!src) return;

//   img.src = src;
//   img.onload = () => {
//     img.style.opacity = "1";
//     img.style.backgroundColor = "transparent";
//   };
//   img.removeAttribute("data-src");
// }
// const observer = new IntersectionObserver((entries, obs) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       loadImage(entry.target);
//       obs.unobserve(entry.target);
//     }
//   });
// }, { rootMargin: "50px", threshold: 0.1 });
// images.forEach(img => observer.observe(img));
// document.getElementById("loadButton").addEventListener("click", () => {
//   images.forEach(img => {
//     if (img.getAttribute("data-src")) {
//       loadImage(img);
//       observer.unobserve(img);
//     }
//   });
// });