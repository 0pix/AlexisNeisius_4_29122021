function editNav() {
  var x = document.getElementById("myTopnav");
  console.log(x);
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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

//Submit function

const validate = () => {
  let isValidate = true;
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthDate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const location = document.getElementsByName("location");
  const conditions = document.getElementById("checkbox1");
  const errorMessage = document.getElementsByClassName("error-message");
  const validateMessage = document.getElementById("validate-message");
  const boutonValidate = document.getElementsByClassName("btn-submit");

  // Regx
  //  https://emailregex.com/

  const myRegx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // FisrtName

  if (firstName.value.length < 2) {
    isValidate = false;
    errorMessage[0].style.display = "block";
    errorMessage[0].innerHTML =
      "<div><p>Veuillez entrer 2 caractères ou plus pour le champ du prénom.</p></div>";
  } else {
    errorMessage[0].style.display = "none";
  }

  // Name

  if (lastName.value.length < 2) {
    isValidate = false;
    errorMessage[1].style.display = "block";
    errorMessage[1].innerHTML =
      "<div><p>Veuillez entrer 2 caractères ou plus pour le champ du nom.</p></div>";
  } else {
    errorMessage[1].style.display = "none";
  }

  // Email

  if (email.value === "") {
    isValidate = false;
    errorMessage[2].style.display = "block";
    errorMessage[2].innerHTML =
      "<div><p>Vous devez entrer votre email.</p></div>";
  } else if (myRegx.test(email.value) == false) {
    isValidate = false;
    errorMessage[2].style.display = "block";
    errorMessage[2].innerHTML =
      "<div><p>Votre email n'est pas valide.</p></div>";
  } else {
    errorMessage[2].style.display = "none";
  }

  // Birth date

  if (birthDate.value === "") {
    isValidate = false;
    errorMessage[3].style.display = "block";
    errorMessage[3].innerHTML =
      "<div><p>Vous devez entrer votre date de naissance.</p></div>";
  } else {
    errorMessage[3].style.display = "none";
  }

  // Quantity

  if (quantity.value === "") {
    isValidate = false;
    errorMessage[4].style.display = "block";
    errorMessage[4].innerHTML = "<div><p>Veuillez choisir un nombre.</p></div>";
  } else if (typeof parseInt(quantity.value) != "number") {
    isValidate = false;
    errorMessage[4].style.display = "block";
    errorMessage[4].innerHTML = "<div><p>Veuillez choisir un nombre.</p></div>";
  } else {
    errorMessage[4].style.display = "none";
  }

  // Location

  let valeur;
  for (var i = 0; i < location.length; i++) {
    if (location[i].checked) {
      valeur = location[i].value;
    }
  }

  if (valeur === undefined) {
    isValidate = false;
    errorMessage[5].style.display = "block";
    errorMessage[5].innerHTML =
      "<div><p>Vous devez choisir une option.</p></div>";
  } else {
    errorMessage[5].style.display = "none";
  }

  // Conditions

  if (conditions.checked === false) {
    isValidate = false;
    errorMessage[6].style.display = "block";
    errorMessage[6].innerHTML =
      "<div><p>Vous devez vérifier que vous acceptez les termes et conditions.</p></div>";
  } else {
    errorMessage[6].style.display = "none";
  }

  // Validate

  if (isValidate === true) {
    validateMessage.style.display = "block";
    boutonValidate[0].style.backgroundColor = "#279E7A";
    // alert("Merci ! Votre réservation a été reçue");
  }
};

//No refreh form

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
