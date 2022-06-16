const signBtn = document.querySelector("#sign_up_btn");
const logBtn = document.querySelector("#login_btn");
const enter = document.querySelector(".login");
const invet = document.querySelector(".invet");
const form = document.querySelector(".contact-form");

const openLog = function () {
  form.classList.remove("hidden");
  invet.classList.remove("hidden");
};

logBtn.addEventListener("click", openLog);
signBtn.addEventListener("click", openLog);

const closeForm = function () {
  form.classList.add("hidden");
  invet.classList.add("hidden");
};

invet.addEventListener("click", closeForm);
login.addEventListener("click", closeForm);
