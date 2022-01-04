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

const closeModal = () => {
  modalbg.style.display = "none";
};

// //Close modal form
// function closeModal() {
//   modalbg.style.display = "none";
// }

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
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const location = document.getElementsByName("location");
  const conditions = document.querySelector(".checkbox-icon");

  if (firstName.value.length < 4) {
    isValidate = false;
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
  console.log(email);
};

validate();
//No refreh
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
