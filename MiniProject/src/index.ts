const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!; // We can use "form" instead of the form id "#todoform" because there's only one form on the page. By default "form" selects the first form
const list = document.getElementById("todolist")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newToDoText = input.value;
  const newLI = document.createElement("LI");
  newLI.append(newToDoText);
  list.append(newLI);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);

// btn.addEventListener("click", function () {
//   alert("Clicked!");
// });
