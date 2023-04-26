//CONSTANTS - ARRAY//

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

//CONSTANTS - EDIT PROFILE//

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-modal");
const profileCloseButton = profileEditModal.querySelector(
  ".modal__form-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileInputTitle = document.querySelector(".modal__form-title");
const profileInputDescription = document.querySelector(
  ".modal__form-description"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

//CONSTANTS - EDIT CARDS//

const cardTemplate =
  document.querySelector("#card__template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__list");
const profileAddCardButton = document.querySelector(".profile__add-button");
const profileAddCardModal = document.querySelector("#card-modal");
const profileCloseCardButton = profileAddCardModal.querySelector(
  ".modal__form-close-button"
);
const profileAddCardSubmitButton = profileAddCardModal.querySelector(
  ".modal__form-submit-button"
);
const profileAddCardFormElement =
  profileAddCardModal.querySelector(".modal__form");
const cardTitleInput =
  profileAddCardFormElement.querySelector(".modal__form-title");
const cardUrlInput = profileAddCardFormElement.querySelector(
  ".modal__form-description"
);

//FUNCTIONS//

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function renderCard(data, cardListElement) {
  const cardElement = getCardElement(data);
  cardListElement.prepend(cardElement);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileInputTitle.value;
  profileDescription.textContent = profileInputDescription.value;
  closeModal(profileEditModal);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button-active");
  });

  cardTitleElement.textContent = data.name;
  cardImageElement.setAttribute("alt", data.name);
  cardImageElement.setAttribute("src", data.link);

  return cardElement;
}

function handleProfileAddCardSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardListElement.prepend(cardElement);
  closeModal(profileAddCardModal);
}

//EVENT LISTENERS

profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
  profileInputTitle.value = profileTitle.textContent;
  profileInputDescription.value = profileDescription.textContent;
});

profileCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

profileEditForm.addEventListener("submit", handleProfileFormSubmit);

profileAddCardButton.addEventListener("click", () =>
  openModal(profileAddCardModal)
);

profileCloseCardButton.addEventListener("click", () =>
  closeModal(profileAddCardModal)
);

profileAddCardSubmitButton.addEventListener(
  "click",
  handleProfileAddCardSubmit
);

//FOR EACH LOOPS

initialCards.forEach((data) => renderCard(data, cardListElement));
