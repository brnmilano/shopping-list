// Captura o nó do formulário
const form = document.querySelector("form");
// Captura o valor input
const input = document.querySelector("#input-add-item").value;
// Captura o nó da ul
const ulContainer = document.querySelector("#ul-container");
// Captura a span com o nome do item na lista
const item = document.querySelector("#item-text");
// Captura o botão para deletar um item da lista
const deleteItem = document.querySelector(".delete-button");

// Cria um toast que é disparado caso o usuário tente adicionar um item sem value
function toastMessage() {
  Toastify({
    text: "Essa é uma notificação Toastify!",
    duration: 3000,
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

// Cria um novo li na DOM com o elemento que foi criado
const createNewElements = () => {
  const li = document.createElement("li");
  li.classList.add("list-items");

  itemsArray.map((item) => {
    li.innerHTML = `
      <div class="item">
        <input type="checkbox" />

        <span id="item-text">${item}</span>
      </div>

      <button class="delete-button">
        <img src="./img/trashicon.svg" alt="" />
      </button>
    `;

    ulContainer.append(li);
  });

  // const deleteButton = li.querySelector(".delete-button");
  // const itemInSpan = li.querySelector("#item-text").innerText;

  // console.log(deleteButton);

  // deleteButton.addEventListener("click", () => {
  //   removeItem(itemInSpan);
  // });
};

form.onsubmit = async (event) => {
  event.preventDefault();

  if (input.length === 0) {
    toastMessage();

    return;
  }

  addItem(inputValue);

  createNewElements();
};
