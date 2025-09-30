// Select form and inputs
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

// Email regex pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Function to show error
function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error-message");
  error.textContent = message;
  input.style.borderColor = "red";
}

// Function to show success
function showSuccess(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error-message");
  error.textContent = "";
  input.style.borderColor = "#4cafef";
}

// Validate form on submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop actual submission

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else {
    showSuccess(nameInput);
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!emailInput.value.match(emailPattern)) {
    showError(emailInput, "Enter a valid email (e.g. user@example.com)");
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message cannot be empty");
    isValid = false;
  } else {
    showSuccess(messageInput);
  }

  // If valid, show success message
  if (isValid) {
    successMessage.textContent = "✅ Your message has been submitted successfully!";
    form.reset();

    // Clear input borders after reset
    [nameInput, emailInput, messageInput].forEach(input => {
      input.style.borderColor = "#bbb";
    });
  } else {
    successMessage.textContent = "";
  }
});
