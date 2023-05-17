const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");

passwordInput.addEventListener("input", (event) => {
  const password = event.target.value;
  if (password === "Kenx-key_00221992311") { //password here
    submitButton.disabled = false;
    message.textContent = "Access granted. Welcome!";
    message.classList.remove("error");
    message.classList.add("success");
  } else {
    submitButton.disabled = true;
    message.textContent = "";
    message.classList.remove("success");
    message.classList.add("error");
  }
});

submitButton.addEventListener("click", () => {
  window.location.href = "https://www.example.com/pagina-di-accesso";
});
