function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("set custom player names");
    return;
  }
  activePlayerName.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function swithPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("select a different field");
    return;
  }

  selectedField.textContent = players[activePlayer].Symbol; // players [0]
  selectedField.classList.add("disable");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  swithPlayer();
}
