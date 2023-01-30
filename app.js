const game = (() => {
  const board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  return {
    board,
  };
})();

const render = function () {
  const container = document.querySelector(".container");
  game.board.forEach((cell, i) => {
    const newCell = document.createElement("div");
    newCell.innerText = cell;
    newCell.classList.add("cell");

    container.appendChild(newCell);
  });
};

render();
