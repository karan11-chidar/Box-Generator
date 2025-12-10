const input = document.getElementById("input");
const button = document.getElementById("button");
const boxContainer = document.getElementById("boxContainer");
const shapeSelect = document.getElementById("shapeSelect");
const colorPicker = document.getElementById("colorPicker");

button.addEventListener("click", function () {
  const count = Number(input.value);
  const shape = shapeSelect.value;
  const color = colorPicker.value;

  if (!count || count <= 0) {
    alert("Please enter a valid number");
    return;
  }

  // clear previous boxes
  boxContainer.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    if (shape === "circle") {
      box.classList.add("circle");
    }

    box.style.backgroundColor = color;
    box.innerText = i;

    boxContainer.appendChild(box);
  }

  input.value = "";
});
