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

function revealItem(itemName) {
  items[itemName] = true;
  localStorage.setItem(itemName, "true");
  checkItems();
}

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

function resetPass(itemName) {
  localStorage.removeItem(itemName);
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  loadItems();
  checkItems();
});