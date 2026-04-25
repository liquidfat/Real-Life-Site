//tracking task completion
const tasks = {
  quiz: false,
  task2: false,
  task3: false
};

function loadTasks() {//load progress from storage
  for (let task in tasks) {
    const saved = localStorage.getItem(task);
    if (saved === "true") {
      tasks[task] = true;
    }
  }
}

function completeTask(taskName) {//mark task as complete
  tasks[taskName] = true;
  window.location.href = "lessons.html";//send back to lessons page

  localStorage.setItem(taskName, true);

  checkAllTasks();
}

//check if all tasks are done
function checkAllTasks() {
  const allDone = Object.values(tasks).every(task => task === true);

  if (allDone) {//if so reveal the number
    document.querySelector(".password3").style.display = "block";
    document.querySelector(".qmark3").style.display = "none";
  }
}

loadTasks();
checkAllTasks();
