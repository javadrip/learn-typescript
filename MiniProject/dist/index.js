"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.querySelector("form"); // We can use "form" instead of the form id "#todoform" because there's only one form on the page. By default "form" selects the first form
function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted!");
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//   alert("Clicked!");
// });
