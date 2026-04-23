const tasks = {
  quiz: false,
  task2: false,
  task3: false
};

// 🔹 Load saved progress when page loads
function loadTasks() {
  for (let task in tasks) {
    const saved = localStorage.getItem(task);
    if (saved === "true") {
      tasks[task] = true;
    }
  }
}

// 🔹 Save + update when a task is completed
function completeTask(taskName) {
  tasks[taskName] = true;

  // save to browser
  localStorage.setItem(taskName, true);

  checkAllTasks();
}

// 🔹 Check if all tasks are done
function checkAllTasks() {
  const allDone = Object.values(tasks).every(task => task === true);

  if (allDone) {
    document.querySelector(".password1").style.display = "block";
    document.querySelector(".qmark1").style.display = "none";
  }
}

// 🔹 Run on page load
loadTasks();
checkAllTasks();