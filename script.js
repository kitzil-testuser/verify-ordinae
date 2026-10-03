"use strict";

const button = document.getElementById("demo-button");
const counter = document.getElementById("counter");

let count = 0;

button.addEventListener("click", () => {
    count += 1;
    counter.textContent = count;
});
