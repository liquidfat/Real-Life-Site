const tasks = {
  quiz: false,
  task2: false,
  task3: false
};

function loadTasks() {
  for (let task in tasks) {
    const saved = localStorage.getItem(task);
    if (saved === "true") {
      tasks[task] = true;
    }
  }
}

function completeTask(taskName) {
  tasks[taskName] = true;
  window.location.href = "lessons.html";

  //save to browser
  localStorage.setItem(taskName, true);

  checkAllTasks();
}

function checkAllTasks() {
  const allDone = Object.values(tasks).every(task => task === true);

  if (allDone) {
    document.querySelector(".password3").style.display = "block";
    document.querySelector(".qmark3").style.display = "none";
  }
}

loadTasks();
checkAllTasks();

// Reset progress for easier testing
function resetTasks() {
  localStorage.removeItem("quiz");
  localStorage.removeItem("task2");
  localStorage.removeItem("task3");
  location.reload();
}