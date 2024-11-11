// Captura o nó do formulário
const form = document.querySelector("form");
// Captura o valor input
const input = document.querySelector("#input-add-item");
// Captura o nó da ul
const ulContainer = document.querySelector("#ul-container");
// Captura a span com o nome do item na lista
const item = document.querySelector("#item-text");
// Captura o botão para deletar um item da lista
const deleteItem = document.querySelector(".delete-button");

// Cria um toast que é disparado caso o usuário tente adicionar um item sem value
function toastMessage() {
  Toastify({
    text: "Item removido da lista!",
    duration: 2000,
    gravity: "bottom", // Posição: "top" ou "bottom"
    position: "center", // Posição: "left", "center" ou "right"
    style: {
      background: "#ff0000", // Cores de fundo
    },
  }).showToast();
}

let itemsArray = [];

// Adiciona um item dentro do array itemsArray
const addItem = (item) => {
  itemsArray.unshift(item);
};

// Remove um item do array itemsArray
const removeItem = (item) => {
  itemsArray.shift(item);
};

// Marca o item se o checkbox for clicado
const markedItem = (hasMarked, liClass) => {
  hasMarked.addEventListener("change", function () {
    if (this.checked) {
      console.log("selecionado");

      liClass.classList.toggle("item-marked");
    } else {
      console.log("não selecionado");

      liClass.classList.toggle("item-not-marked");
    }
  });
};

// Cria um novo li na DOM com o elemento que foi criado
const createNewElements = () => {
  ulContainer.innerHTML = ""; // Limpa a lista antes de recriar os elementos

  itemsArray.map((item) => {
    const li = document.createElement("li");
    li.classList.add("list-items");

    li.innerHTML = `
      <div class="item">
        <input name="checkbox" id="checkbox" type="checkbox" />

        <span id="item-text">${item}</span>
      </div>

      <button class="delete-button">
        <img src="./img/trashicon.svg" alt="" />
      </button>
    `;

    ulContainer.append(li);

    const checkbox = document.querySelector("input[name=checkbox]");
    const liClass = document.querySelector(".list-items");

    markedItem(checkbox, liClass);
  });

  // remove o item de acordo com o botão de deletar que foi clicado
  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.closest("button").dataset.index;

      removeItem(index);

      createNewElements();

      toastMessage();
    });
  });
};

form.onsubmit = async (event) => {
  event.preventDefault();

  const inputValue = input.value;

  if (input.length === 0) {
    toastMessage();

    return;
  }

  addItem(inputValue);

  createNewElements();
};
