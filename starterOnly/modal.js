/***************|fonction bouton nav|***************/

function editNav() {
  const x = document.getElementById("myTopnav");
  const menuTopNav = document.getElementsByClassName("icon");
  const iconTopNav = document.getElementById("iconTopNav");
  // console.log(x);
  if (x.className === "topnav") {
    x.className += " responsive";
    menuTopNav[0].style.backgroundColor = "#ff0000";
    menuTopNav[0].style.borderRadius = "15px";
    iconTopNav.style.color = "white";
  } else {
    x.className = "topnav";
    menuTopNav[0].style.backgroundColor = "transparent";
    menuTopNav[0].style.borderRadius = "0px";
    iconTopNav.style.color = "#ff0000";
  }
}
/***************|Open/Close modal|***************/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
};

// Close Modal form
const closeModal = () => {
  modalbg.style.display = "none";
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

/***************|Submit function|***************/

// Regx for Email
const myRegx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Variable for validate message
let isValidate;
const validateBalise = document.getElementById("thank-form");

const validate = () => {
  isValidate = true;
  for (let i = 0; i < formData.length; i++) {
    const inputBalise = formData[i].querySelector("input");
    const labelBalise = formData[i].querySelector("label");
    const errorBalise = formData[i].querySelector(".error-message");
    let errorMessage = "";

    // Switch to give an action by type.
    switch (inputBalise.type) {
      case "text":
        if (inputBalise.value.length < 2) {
          errorMessage =
            "Veuillez entrer 2 caractères ou plus pour le champ du " +
            labelBalise.textContent;
          isValidate = false;
        }
        break;

      case "email":
        if (myRegx.test(email.value) == false) {
          errorMessage = "Votre email n'est pas valide.";
          isValidate = false;
        }
        break;

      case "number":
        if (
          typeof parseInt(inputBalise.value) !== "number" ||
          inputBalise.value === ""
        ) {
          errorMessage = "Veuillez choisir un nombre.";
          isValidate = false;
        }
        break;

      case "radio":
        let inputRadio = formData[i].querySelectorAll("input");
        let radioValue;

        for (let v = 0; v < inputRadio.length; v++) {
          if (inputRadio[v].checked) {
            radioValue = inputRadio[v].value;
          }
        }

        if (radioValue === undefined) {
          errorMessage = "Vous devez choisir une option.";
          isValidate = false;
        }
        break;

      case "checkbox":
        if (inputBalise.checked === false) {
          errorMessage =
            "Vous devez vérifier que vous acceptez les termes et conditions.";
          isValidate = false;
        }
        break;
    }

    // If message is empty
    if (inputBalise.value === "") {
      errorMessage = "Vous devez entrer votre " + labelBalise.textContent;
      isValidate = false;
    }

    // Border color for other type than type radio and checkbox
    if (errorMessage !== "") {
      if (inputBalise.type !== "radio" && inputBalise.type !== "checkbox") {
        inputBalise.style.border = "3px red solid";
      }
    } else {
      inputBalise.style.border = "3px #279e7a solid";
    }

    // Show error message
    errorBalise.style.display = "block";
    errorBalise.innerHTML = errorMessage;
  }

  //Global message validation
  if (isValidate) {
    validateBalise.style.display = "flex";
  }
};

//No refreh form
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
