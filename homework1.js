const galleryItems = [
  { preview: "Hello World", original: "first text (без фото sry)" },
  { preview: "Learning JS", original: "second text(без фото sry)" },
  { preview: "Modal Demo", original: "third text(без фото sry)" },
];

const galleryContainer = document.querySelector(".js-gallery");

const createGalleryItem = ({ preview, original }) => {
  return `
    <li style="display:inline-block; margin:10px;">
      <a href="#">
        <span class="gallery__text" data-source="${original}" style="cursor:pointer; font-size:18px; padding:5px; border:1px solid #333;">
          ${preview}
        </span>
      </a>
    </li>`;
};

galleryContainer.innerHTML = galleryItems.map(createGalleryItem).join("");


const lightbox = document.querySelector(".js-lightbox");
const lightboxText = document.querySelector(".lightbox__text");
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector(".lightbox__overlay");

galleryContainer.addEventListener("click", onGalleryClick);
closeBtn.addEventListener("click", closeLightbox);
overlay.addEventListener("click", closeLightbox);
window.addEventListener("keydown", onKeyPress);

function onGalleryClick(event) {
  event.preventDefault();

  const isText = event.target.classList.contains("gallery__text");
  if (!isText) return;

  openLightbox(event.target.dataset.source);
}

function openLightbox(text) {
  lightbox.style.display = "block";
  lightboxText.textContent = text;
}

function closeLightbox() {
  lightbox.style.display = "none";
  lightboxText.textContent = "";
}

function onKeyPress(event) {
  if (event.code === "Escape") {
    closeLightbox();
  }
}
