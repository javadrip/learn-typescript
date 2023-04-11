const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!; // We can use "form" instead of the form id "#todoform" because there's only one form on the page. By default "form" selects the first form

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log("Submitted!");
}

form.addEventListener("submit", handleSubmit);

// btn.addEventListener("click", function () {
//   alert("Clicked!");
// });
