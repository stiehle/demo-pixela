const dateEl = document.getElementById("date");
const quantityEl = document.getElementById("quantity");
const createPixelButtonEl = document.querySelector(".create-pixel");
const readPixelButtonEl = document.querySelector(".read-pixel");
const outputbuttonEl = document.querySelector(".output");
const deleteButtonEl = document.querySelector(".delete-pixel");
const updateButtonEl = document.querySelector(".update-pixel");
const updateQuantityEl = document.getElementById("update-quantity");

createPixelButtonEl.addEventListener("click", createNewPixel);
readPixelButtonEl.addEventListener("click", readPixel);
deleteButtonEl.addEventListener("click", deletePixel);
updateButtonEl.addEventListener("click", updatePixel);

function createNewPixel() {
  console.log("create new Pixel");
  console.log(quantityEl);

  if (quantityEl.value) {
    console.log("todo");

    newPixel = {
      date: `${getSelectedDate()}`,
      quantity: `${quantityEl.value}`,
      optionalData: '{"language": "javascript"}',
    };
    console.log(newPixel);
    postPixelAPI(newPixel);
  } else {
    alert("Please insert quantity");
  }
  console.log("Quantity", quantityEl.value);
}

function getSelectedDate() {
  const selectetDate = dateEl.value;
  if (!selectetDate) {
    alert("Please select a date");
    return;
  }
  const changedDate = selectetDate.replaceAll(/-/g, "");

  console.log(selectetDate, changedDate);
  return changedDate;
}

async function readPixel() {
  const date = getSelectedDate();
  console.log(date);

  if (date !== undefined) {
    const body = await getPixelAPI(date);
    outputbuttonEl.innerHTML = `quantity: ${body.quantity},  optionalData: ${body.optionalData}`;
  }
}

function updatePixel() {
  const date = getSelectedDate();
  const updateQuantity = updateQuantityEl.value;
  console.log("date: ", date, "update Quantity: ", updateQuantity);

  if (date !== undefined && updateQuantity !== "") {
    newData = {
      date: `${date}`,
      quantity: `${updateQuantity}`,
      optionalData: '{"language": "javascript"}',
    };
    updatePixelAPI(date, newData);
  } else {
    if (!updateQuantity) alert("Please insert Quantity");
  }
}

function deletePixel() {
  const date = getSelectedDate();
  console.log(date);

  if (date !== undefined) {
    deletePixelAPI(date);
  }
}

function reload() {
  location.reload();
}
