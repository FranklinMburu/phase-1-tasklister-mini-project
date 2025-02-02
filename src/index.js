document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
          const taskItem = document.createElement("li");
          taskItem.textContent = taskText;

          taskList.appendChild(taskItem); // Add task to the DOM
          
          taskInput.value = ""; // Clear input field
      }
  });
});
