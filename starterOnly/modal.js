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

//Submit

const validate = () => {
  let isValidate = true;
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthDate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const location = document.getElementsByName("location");
  const conditions = document.getElementById("checkbox1");

  // Fonction regx
  //  https://emailregex.com/

  let myRegx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // FisrtName

  if (firstName.value.length < 2) {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    isValidate = false;
  }

  // Name

  if (lastName.value.length < 2) {
    isValidate = false;
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }

  // Email

  if (email.value === "") {
    isValidate = false;
    alert("Vous devez entrer votre email.");
  } else if (myRegx.test(email.value) == false) {
    isValidate = false;
    alert("Votre email n'est pas valide.");
  }

  // birth
  if (birthDate.value === "") {
    alert("Vous devez entrer votre date de naissance.");
    isValidate = false;
  }

  console.log(birthDate.value);

  // Quantity

  if (quantity.value === "") {
    isValidate = false;
    alert("Veuillez choisir un nombre.");
  } else if (typeof parseInt(quantity.value) != "number") {
    isValidate = false;
    alert("Veuillez choisir un nombre.");
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
    alert("Vous devez choisir une option.");
  }

  // Condition

  if (conditions.checked === false) {
    isValidate = false;
    alert("Vous devez vérifier que vous acceptez les termes et conditions.");
  }

  if (isValidate === true) {
    alert("Formulaire valide.");
  }
};

//No refreh form
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
