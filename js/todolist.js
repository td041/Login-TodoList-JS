const input = document.querySelector(".todo-input");
const button = document.querySelector(".input-button");
const todolist = document.querySelector(".todolist");
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});
button.addEventListener("click", () => {
  const content = input.value;
  if (content) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `
    <div class="checkboxlist">
        <input type="checkbox" class="input-status"/>
        <span class="content">${content}</span>
    </div>
    <button class="delete-button">Xóa</button>`;
    //Xóa
    todolist.appendChild(newLi);
    const deleteButton = newLi.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      todolist.removeChild(newLi);
    });
    //Checkbox
    const checkbox = newLi.querySelector(".input-status");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        newLi.setAttribute("class", "todo-complete");
      } else {
        newLi.setAttribute("class", "todo-item");
      }
    });
  }
  input.value = "";
});
const clear = document.querySelector(".clear-all");
clear.addEventListener("click", () => {
  todolist.innerHTML = "";
});
