let lostItems = [];
let foundItems = [];

function addLostItem() {
  let name = document.getElementById("lostName").value;
  let location = document.getElementById("lostLocation").value;

  if (name && location) {
    lostItems.push({ name, location });
    displayLostItems();
  }
}

function addFoundItem() {
  let name = document.getElementById("foundName").value;
  let location = document.getElementById("foundLocation").value;

  if (name && location) {
    foundItems.push({ name, location });
    displayFoundItems();
  }
}

function displayLostItems() {
  let list = document.getElementById("lostList");
  list.innerHTML = "";

  lostItems.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${item.location}`;
    list.appendChild(li);
  });
}

function displayFoundItems() {
  let list = document.getElementById("foundList");
  list.innerHTML = "";

  foundItems.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${item.location}`;
    list.appendChild(li);
  });
}
