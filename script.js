"use strict";
const themeToggle = document.getElementById("theme__switcher");
const bodyEl = document.body;

function setTheme(theme) {
  bodyEl.classList.toggle("dark", theme === "dark");
  bodyEl.classList.toggle("light", theme !== "dark");
  themeToggle.style.filter = theme === "dark" ? "invert(75%)" : "none";
  // Setting the theme in local storage
  localStorage.setItem("theme", theme);
}

// Function to toggle the theme between light and dark
function toggleTheme() {
  setTheme(localStorage.getItem("theme") === "dark" ? "light" : "dark");
}

// Check if the theme is stored in local storage
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  setTheme(storedTheme);
}

function detectPreferredTheme() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  setTheme(prefersDarkMode && storedTheme !== "light" ? "dark" : "light");
}

// Run the function to detect the user's preferred theme
detectPreferredTheme();

themeToggle.addEventListener("click", toggleTheme);
