function showInputError(formElement, inputElement, options) {
  const { inputErrorClass } = options;
  const { errorClass } = options;
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);
}

// const hideInputError = (input) => {
//   input.classList.remove("modal__input:invalid");
//   formError.classList.remove({ errorClass });
//   formError.textContent = "";
// };

// const isValid = () => {
//   if (!inputSelector.validity.valid) {
//     showInputError(inputSelector, formInput.validationMessage);
//   } else {
//     hideInputError(inputSelector);
//   }
// };

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, options);
    });
  });
}

function enableValidation(options) {
  const { formSelector } = options;
  const formElements = [...document.querySelectorAll(formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, options);
  });
}

const configuration = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__form-submit-button",
  inactiveButtonClass: ".modal__button_disabled",
  inputErrorClass: ".modal__form-error",
  errorClass: ".modal__error_visible",
};

enableValidation(configuration);

// enableValidation({
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__button",
//     inactiveButtonClass: "popup__button_disabled",
//     inputErrorClass: "popup__input_type_error",
//     errorClass: "popup__error_visible"
//   });
