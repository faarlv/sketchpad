const container = document.querySelector(".container");

const header = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h3");
const sketchpad = document.createElement("div");
const fragment = document.createDocumentFragment();
const menu = document.createElement("div");
const btn1 = document.createElement("div");
const btn2 = document.createElement("div");
const btn3 = document.createElement("div");
const btn4 = document.createElement("div");
const color = document.createElement("input");
const footer = document.createElement("div");
const icon = document.createElement("i");

let createGrid = (row, cell) => {
  let padSize = Math.sqrt((550 * 550) / (row * cell));
  for (let i = 0; i < row; i++) {
    const rows = document.createElement("div");
    rows.classList.add("sketchers");
    rows.style.height = `${padSize}px`;
    rows.style.width = `${padSize}px`;
    for (let k = 0; k < cell; k++) {
      const cells = document.createElement("div");
      cells.classList.add("sketchers");
      cells.style.height = `${padSize}px`;
      cells.style.width = `${padSize}px`;
      rows.appendChild(cells);
    }
    fragment.appendChild(rows);
  }
  sketchpad.appendChild(fragment);

  const allCells = sketchpad.querySelectorAll(".sketchers div");

  let state = "mouseover";
  btn4.onclick = () => {
    btn4.innerText =
      btn4.innerText === "Trail Mode" ? "Hover Mode" : "Trail Mode";
    if (state === "mouseover") {
      state = "click";
    } else {
      state = "mouseover";
    }
  };

  allCells.forEach((cell) => {
    cell.addEventListener(state, () => {
      cell.style.backgroundColor = color.value;
    });
  });

  btn1.onclick = () => {
    let input = prompt("add u number:");
    let padSize = Math.sqrt((550 * 550) / (input * input));
    if (input > 100) {
      alert("you can add more than 100");
    } else {
      sketchpad.innerHTML = "";
      createGrid(input, input);
      sketchpad.appendChild(fragment);
    }
  };

  btn3.onclick = () => {
    allCells.forEach((cell) => {
      cell.style.backgroundColor = "antiquewhite";
    });
  };
};

header.classList.add("header");
sketchpad.classList.add("sketchpad");
footer.classList.add("footer");
h1.textContent = "SKETCHPAD";
h2.textContent = "created by faarlv";
menu.classList.add("menu");
btn1.textContent = "Edit Grid";
btn2.textContent = "Change Color";
btn3.textContent = "Clear Sketch";
icon.classList.add("fa-brands", "fa-github");
icon.style.fontSize = "30px";
icon.style.color = "white";

color.setAttribute("type", "color");
createGrid(16, 16);

btn2.appendChild(color);
menu.append(btn1, btn2, btn3);
header.appendChild(h1);
header.appendChild(menu);
container.appendChild(header);
container.appendChild(sketchpad);
footer.appendChild(icon);
footer.appendChild(h2);
container.appendChild(footer);
