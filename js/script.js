"use strict";

let toggle_button = document.getElementById("toggle-btn");
console.log(toggle_button.classList);

let mainListDiv = document.getElementById("mainListDiv");

let testMenu = document.getElementById("test-menu");

toggle_button.onclick = function () {
  if (toggle_button.classList.contains("fa-bars")) {
    mainListDiv.classList.toggle("show_list");
    toggle_button.classList.add("fa-times");
    toggle_button.classList.remove("fa-bars");
  } else {
    mainListDiv.classList.remove("show_list");
    toggle_button.classList.add("fa-bars");
    toggle_button.classList.remove("fa-times");
  }
};
