
const taskFormInputEl = document.querySelector("#taskInput");
const taskFormButtonEl = document.querySelector("#taskButton");
const taskListEl = document.querySelector("#task-list");

taskFormButtonEl.addEventListener("click", (event) => {
  event.preventDefault();

  const text = taskFormInputEl.value;

  const taskElement = createTaskElement(text);

  document.querySelector("#task-list").appendChild(taskElement);

  // taskFormInputEl.value = "";
});

function createTaskElement(text) {
  const taskEl = document.createElement("div");
  taskEl.classList.add("todo");

  const taskTextEl = document.createElement("p");
  taskTextEl.classList.add("todo-text");
  taskTextEl.textContent = text;

  const taskButtonEl = document.createElement("button");
  taskButtonEl.classList.add("todo-button");
  taskButtonEl.textContent = "Remove";

  const editButtonEl = document.createElement("button");
  editButtonEl.classList.add("todo-button");
  editButtonEl.textContent = "Edit";

  taskButtonEl.addEventListener("click", () => {
    taskEl.remove();
  });

  editButtonEl.addEventListener("click", () => {
    const editText = prompt("Edit task:", text);
    if (editText !== null) {
      taskTextEl.textContent = editText;
    }
  });

  taskEl.appendChild(taskTextEl);
  taskEl.appendChild(taskButtonEl);
  taskEl.appendChild(editButtonEl);

  return taskEl;
}


window.addEventListener("beforeunload", function() {
  const inputData=document.getElementById("taskInput").value;
  localStorage.setItem("savedData",inputData);
});

window.addEventListener("load", function(){
  const savedData=localStorage.getItem("savedData");
  if(savedData){
    document.getElementById("taskInput").value=savedData;
  }
})