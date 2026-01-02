document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value;

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);
    input.value = "";
  });
});
