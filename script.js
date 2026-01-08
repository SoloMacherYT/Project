//This is to display that alert Pop-Up
const button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  // Show popup
  alert("Hello! You clicked the button");

  /* Redirect to a new site after pressing OK
   window.location.href = "www.example.com"; */
});

// Get references to input, button, and output
const inputField = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");
const outputText = document.getElementById("outputText");

// Add click event to button
submitBtn.addEventListener("click", function() {
  const name = inputField.value; // get input value
  if (name.trim() !== "") {
    outputText.innerHTML = "Hello, " + name + "! Nice to meet you. <br> Try my calculator below:";
} else {
    outputText.textContent = "Please enter your name.";
  }
});

const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value); // evaluates the expression
  } catch {
    display.value = "Error";
  }
}

//this is for random button color
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Apply random color to body background
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

//this is to hide the paragraph button
const toggleBtn = document.getElementById("toggleBtn");
const paragraphs = document.querySelectorAll(".togglePara");

toggleBtn.addEventListener("click", function() {
  paragraphs.forEach(p => {
    if (p.style.display === "none") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
    
  });
  
});


const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  let valid = true;

  // Validate name
  if (nameInput.value.trim() === ""){
    nameError.textContent = "Name cannot be empty.";
    valid = false;
  } else {
    nameError.textContent ="";
  }

  // Validate email
  if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
    emailError.textContent = "Please enter a valid email (must contain @).";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // If valid, show success alert
  if (valid) {
    alert("Form submitted successfully!");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  let valid = true;

  if (name.trim() === "") {
    nameError.textContent = "Name cannot be empty.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Please enter a valid email (must contain @).";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    // Optional: clear form
    form.reset();
    // Ensure errors are cleared after reset
    nameError.textContent = "";
    emailError.textContent = "";
  }
});
