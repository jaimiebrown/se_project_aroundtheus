const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector(".modal");
const profileCloseButton = document.querySelector(".modal__form-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileInputTitle = document.querySelector(".modal__form-title");
const profileInputDescription = document.querySelector(
  ".modal__form-description"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card__template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__list");

function modalOpened() {
  profileEditModal.classList.add("modal__opened");
  profileInputTitle.value = profileTitle.textContent;
  profileInputDescription.value = profileDescription.textContent;
}

function modalClosed() {
  profileEditModal.classList.remove("modal__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileInputTitle.value;
  profileDescription.textContent = profileInputDescription.value;
  modalClosed();
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  cardTitleElement.textContent = data.name;
  cardImageElement.setAttribute("alt", data.name);
  cardImageElement.setAttribute("src", data.link);
  return cardElement;
}

profileEditButton.addEventListener("click", modalOpened);

profileCloseButton.addEventListener("click", modalClosed);

profileEditForm.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardListElement.append(cardElement);
});
