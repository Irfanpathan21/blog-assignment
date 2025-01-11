// Select elements
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeToggleImg = themeToggle.querySelector("img");

// Handle theme toggle
themeToggle.addEventListener("click", () => {
  // Check if dark theme is enabled
  if (body.classList.contains("dark-theme")) {
    // If dark theme is on, switch to light mode
    themeToggleImg.setAttribute("src", "./assets/dark.png"); // Show light icon
  } else {
    // If dark theme is off, switch to dark mode
    themeToggleImg.setAttribute("src", "./assets/bulb.png"); // Show dark icon
  }

  // Toggle dark theme class
  body.classList.toggle("dark-theme");
});