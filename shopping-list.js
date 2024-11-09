const form = document.querySelector("form");
const input = document.querySelector("#input-add-item");

const item = document.querySelector("#item-text");
const listItems = document.querySelector("#list-items");

const deleteItem = document.querySelector("#delete-item");

let itemsArray = [];

const addItem = (item) => {
  itemsArray.unshift(item);

  console.log(itemsArray);
};

form.onsubmit = async (event) => {
  event.preventDefault();

  const inputValue = input.value;

  console.log(inputValue);
  console.log(typeof inputValue);

  addItem(inputValue);
};
