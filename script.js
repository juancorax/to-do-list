const list = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

addButton.addEventListener("click", () => {
  const inputValue = input.value;

  input.value = "";

  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  listItem.appendChild(span);
  listItem.appendChild(deleteButton);

  span.textContent = inputValue;
  deleteButton.textContent = "Delete";

  list.appendChild(listItem);

  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
