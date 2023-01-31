let game = (function () {
  const play = {
    gameBoard: ["", "", "", "", "", "", "", "", ""],
    players: [],
    currentPlayerTurn: "hey",

    init: function () {
      this.getPlayers();
      this.setTurn();
      this.renderBoard();
      this.renderScore();
    },

    getPlayers: function () {
      let player1name = prompt("Who is player 1").toLowerCase();
      let player1sign = prompt("What is player 1's sign?").toLowerCase();
      let player2name = prompt("Who is player 2").toLowerCase();
      let player2sign = prompt("What is player 1's sign?").toLowerCase();

      this.players.push(this.createPlayer(player1name, player1sign));
      this.players.push(this.createPlayer(player2name, player2sign));
    },

    setTurn: function () {
      let firstTurnForPlayer1 = prompt(
        `Does ${this.players[0].name} go first? yes or no.`
      ).toLowerCase();

      this.currentPlayerTurn =
        firstTurnForPlayer1 === "yes" ? this.players[0] : this.players[1];
    },

    createPlayer: function (name, sign) {
      sign = sign.toUpperCase();
      let points = "0";
      return { name, sign, points };
    },

    renderBoard: function () {
      const container = document.querySelector(".container");
      this.gameBoard.forEach((cell, i) => {
        const newCell = document.createElement("div");
        newCell.addEventListener("click", this.placeSign);
        newCell.innerText = cell;
        newCell.classList.add("cell");
        newCell.setAttribute(`cell`, `${i}`);

        container.appendChild(newCell);
      });
    },

    renderScore: function () {
      const player1 = document.querySelector(".player1");
      const player2 = document.querySelector(".player2");

      player1.innerText = `${this.players[0].name}'s score: ${this.players[0].points}`;
      player2.innerText = `${this.players[1].name}'s score: ${this.players[1].points}`;
    },

    changeTurn: function () {
      if (this.currentPlayerTurn === this.players[0]) {
        this.currentPlayerTurn = this.players[1];
      } else {
        this.currentPlayerTurn = this.players[0];
      }
    },

    checkWin: function (target) {
      const signForCurrentPlayer = target.innerText;
      if (
        (this.gameBoard[0] == signForCurrentPlayer &&
          this.gameBoard[1] == signForCurrentPlayer &&
          this.gameBoard[2] == signForCurrentPlayer) ||
        (this.gameBoard[3] == signForCurrentPlayer &&
          this.gameBoard[4] == signForCurrentPlayer &&
          this.gameBoard[5] == signForCurrentPlayer) ||
        (this.gameBoard[6] == signForCurrentPlayer &&
          this.gameBoard[7] == signForCurrentPlayer &&
          this.gameBoard[8] == signForCurrentPlayer) ||
        (this.gameBoard[0] == signForCurrentPlayer &&
          this.gameBoard[3] == signForCurrentPlayer &&
          this.gameBoard[6] == signForCurrentPlayer) ||
        (this.gameBoard[1] == signForCurrentPlayer &&
          this.gameBoard[4] == signForCurrentPlayer &&
          this.gameBoard[7] == signForCurrentPlayer) ||
        (this.gameBoard[2] == signForCurrentPlayer &&
          this.gameBoard[5] == signForCurrentPlayer &&
          this.gameBoard[8] == signForCurrentPlayer) ||
        (this.gameBoard[0] == signForCurrentPlayer &&
          this.gameBoard[4] == signForCurrentPlayer &&
          this.gameBoard[8] == signForCurrentPlayer) ||
        (this.gameBoard[2] == signForCurrentPlayer &&
          this.gameBoard[4] == signForCurrentPlayer &&
          this.gameBoard[6] == signForCurrentPlayer)
      ) {
        this.won(this.currentPlayerTurn);
      }
    },

    won: function (winner) {
      console.log(winner);
      winner.score++;
      if (winner.score >= 3) {
        alert(`${winner.name} has won the MATCH`);
        this.clearBoard();
        this.resetScore();
      } else {
        this.clearBoard();
      }
    },

    placeSign: function () {
      if (this.innerText === "") {
        this.innerText = play.currentPlayerTurn.sign;
        play.gameBoard[this.getAttribute("cell")] = play.currentPlayerTurn.sign;
        console.log(play.gameBoard);
        play.checkWin(this);
        play.changeTurn();
      }
    },
  };

  play.init();
  console.log(play.players);
  console.log(play.currentPlayerTurn);
})();

//redo with proper revealing module pattern javascript!
