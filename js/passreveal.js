//track whats revealed
const items = {
  password1: false,
  password4: false
};

function loadItems() {
  for (let item in items) {
    const saved = localStorage.getItem(item);
    if (saved === "true") {
      items[item] = true;
    }
  }
}
 
//mark the numbers as revealed and save to storage
function revealItem(itemName) {
  items[itemName] = true;
  localStorage.setItem(itemName, "true");
  checkItems();
}

//show numbers and hife qmarks
function checkItems() {
  for (let item in items) {
    if (items[item]) {
      const number = item.replace("password", "");

      const pass = document.querySelector("." + item);
      const qmark = document.querySelector(".qmark" + number);

      if (pass && qmark) {
        pass.style.display = "block";
        qmark.style.display = "none";
      }
    }
  }
}

//reset for testing
function resetPass(itemName) {
  localStorage.removeItem(itemName);
  location.reload();
}

//load saved progress
document.addEventListener("DOMContentLoaded", () => {
  loadItems();
  checkItems();
});