let inp = document.querySelector("input");
let form = document.querySelector("form");
let btn = document.querySelector("#click");

let email = document.querySelector("#email");
let naam = document.querySelector("#name");
let mobile = document.querySelector("#mobile");

form.addEventListener("submit", (events) => {
  events.preventDefault();
  console.log("name->", form[0].value);
  console.log("email->", form[1].value);
  console.log("mobile->", form[2].value);

  naam.textContent = form[0].value;
  email.textContent = form[1].value;
  mobile.textContent = form[2].value;

});