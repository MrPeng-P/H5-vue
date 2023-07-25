// 生成一个4x4的方格矩阵
const grid = document.getElementById("grid");
const rows = 4;
const cols = 4;
const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
let matrix = [];

function initMatrix() {
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = {
        value: Math.floor(Math.random() * colors.length),
        removed: false,
      };
    }
  }
}

function renderMatrix() {
  grid.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.backgroundColor = colors[matrix[i][j].value];
      cell.innerText = matrix[i][j].value + 1;
      cell.onclick = () => removeCells(i, j);
      grid.appendChild(cell);
    }
  }
}

function removeCells(row, col) {
  const value = matrix[row][col].value;
  const stack = [{ row, col }];
  const removedCells = [];

  while (stack.length > 0) {
    const { row, col } = stack.pop();

    if (
      row < 0 || row >= rows || col < 0 || col >= cols ||
      matrix[row][col].removed || matrix[row][col].value !== value
    ) {
      continue;
    }

    matrix[row][col].removed = true;
    removedCells.push({ row, col });

    stack.push({ row: row - 1, col });
    stack.push({ row: row + 1, col });
    stack.push({ row, col: col - 1 });
    stack.push({ row, col: col + 1 });
  }

  if (removedCells.length >= 3) {
    removeAnimation(removedCells);
  } else {
    resetRemoved();
  }
}

function removeAnimation(removedCells) {
  removedCells.forEach((cell) => {
    const { row, col } = cell;
    const cellElement = grid.children[row * cols + col];
    cellElement.style.animation = "remove 0.5s";
  });

  setTimeout(() => {
    removedCells.forEach((cell) => {
      const { row, col } = cell;
      matrix[row][col].value = Math.floor(Math.random() * colors.length);
      matrix[row][col].removed = false;

      const cellElement = grid.children[row * cols + col];
      cellElement.style.backgroundColor = colors[matrix[row][col].value];
      cellElement.innerText = matrix[row][col].value + 1;
      cellElement.style.animation = "";
    });

    resetRemoved();
  }, 500);
}

function resetRemoved() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      matrix[i][j].removed = false;
    }
  }
}

initMatrix();
renderMatrix();
