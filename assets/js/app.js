// Contact Form Validation

const nameValue = document.querySelector("#name");
const emailValue = document.querySelector("#email");
const subjectValue = document.querySelector("#subject");
const messageValue = document.querySelector("#message");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function () {
  //validate Form Field
  const nameRegx = new RegExp(/^[A-Za-z\s]*$/);
  const emailRegx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  if (!nameRegx.test(nameValue.value)) {
    var nameAlert = document.querySelector("#alert-name");
    nameAlert.innerHTML = "Please Enter A Valid Name";
  } else if (!emailRegx.test(emailValue.value)) {
    var nameAlert = document.querySelector("#alert-email");
    nameAlert.innerHTML = "Please Enter A Valid Email";
  } else {
    var nameAlert = document.querySelector("#success-msg");
    nameAlert.innerHTML = "Your Message Has Been Submitted Successfully";
  }
});
