// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.
// Подивися демо відео роботи галереї.
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >, і вказуватися в href посилання.
// Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням
// користувач буде перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape.Зроби так, щоб прослуховування клавіатури
// було тільки доти, доки відкрите модальне вікно.Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galletyItemEl = galleryEl.querySelector(".gallery__item");

const galleryMarkUp = createGallery(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkUp);

galleryEl.addEventListener("click", onGalleryItemClick);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  window.addEventListener("keydown", onEscKeyPress);

  basicLightbox
    .create(
      `<img width="100vw" height="100vh" src="${event.target.dataset.source}">
	`
    )
    .show();
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    const imageModal = document.querySelector(".basicLightbox");
    imageModal.classList.remove("basicLightbox--visible");
    window.removeEventListener("keydown", onEscKeyPress);
  }
}

// const pageTitle = document.querySelector("title");
// const script = document.querySelector('script[src = "js/01-gallery.js"]');

// addLightBoxLibrary();

// function addLightBoxLibrary() {
//   pageTitle.insertAdjacentHTML(
//     "afterend",
//     `<link
//       rel="stylesheet"
//       href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"
//     />`
//   );

//   script.insertAdjacentHTML(
//     "afterend",
//     `<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>`
//   );
// }
