const bookmarkInput = document.getElementById("bookmarkInput");
const addBookmarkBtn = document.getElementById("addBookmarkBtn");
const bookmarkList = document.getElementById("bookmarkList");
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
function renderBookmarks() {
  bookmarkList.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = bookmark;
    link.textContent = bookmark;
    link.target = "_blank";
    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";
    editBtn.addEventListener("click", () => {
      const newUrl = prompt("Редагуйте URL:", bookmark);
      if (newUrl) {
        bookmarks[index] = newUrl;
        saveBookmarks();
        renderBookmarks();
      }
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => {
      bookmarks.splice(index, 1);
      saveBookmarks();
      renderBookmarks();
    });
    li.appendChild(link);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    bookmarkList.appendChild(li);
  });
}
function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

addBookmarkBtn.addEventListener("click", () => {
  const url = bookmarkInput.value.trim();
  if (url) {
    bookmarks.push(url);
    saveBookmarks();
    renderBookmarks();
    bookmarkInput.value = "";
  }
});
renderBookmarks();
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem("formData"));
  if (savedData) {
    usernameInput.value = savedData.username || "";
    passwordInput.value = savedData.password || "";
  }
}
saveBtn.addEventListener("click", () => {
  const formData = {
    username: usernameInput.value,
    password: passwordInput.value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Дані збережено!");
});
loadFormData();
const products = [
  { name: "Ноутбук", price: 1200, description: "Потужний ноутбук для роботи та ігор." },
  { name: "Телефон", price: 700, description: "Новий смартфон з відмінною камерою." },
  { name: "Планшет", price: 400, description: "Портативний пристрій для читання та перегляду." },
  { name: "Навушники", price: 150, description: "Навушники з шумозаглушенням і глибоким басом." },
];
const searchInput = document.getElementById("searchInput");
const productContainer = document.getElementById("productContainer");
fetch("src/template.hbs")
  .then(res => res.text())
  .then(templateSource => {
    const template = Handlebars.compile(templateSource);
    renderProducts(template, products);

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(query));
      renderProducts(template, filtered);
    });
  });
function renderProducts(template, data) {
  const html = data.map(p => `
    <ul class="product-list">
      <li class="product-item">
        <h2 class="name">${p.name}</h2>
        <p class="price">Price: ${p.price}</p>
        <p class="description">${p.description}</p>
      </li>
    </ul>
  `).join("");
  productContainer.innerHTML = html;
}
