let todoList = JSON.parse(localStorage.getItem("todos")) || [
  { item: "complete js", dueDate: "01/03/2026" },
  { item: "complete DSA", dueDate: "01/03/2026" }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#date-input");

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todoList.push({ item: todoItem, dueDate: todoDate });

  localStorage.setItem("todos", JSON.stringify(todoList));

  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button onclick="todoList.splice(${i},1); 
      localStorage.setItem('todos', JSON.stringify(todoList)); 
      displayItems();" id="delete-button">DELETE</button>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteElement() {}
