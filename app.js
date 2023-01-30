(function () {
  const play = {
    gameBoard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
    players: [],
    currentPlayerTurnSign: 1,

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

      this.currentPlayerTurnSign =
        firstTurnForPlayer1 === "yes"
          ? this.players[0].sign
          : this.players[1].sign;
    },

    createPlayer: function (name, sign) {
      sign = sign.toUpperCase();
      let points = 0;
      return { name, sign, points };
    },

    renderBoard: function () {
      const container = document.querySelector(".container");
      this.gameBoard.forEach((cell, i) => {
        const newCell = document.createElement("div");
        newCell.addEventListener("click", this.placeSign);
        newCell.innerText = cell;
        newCell.classList.add(`cell`, `${i}`);

        container.appendChild(newCell);
      });
    },

    renderScore: function () {
      const player1 = document.querySelector(".player1");
      const player2 = document.querySelector(".player2");

      player1.innerText = this.player[0].points;
      player2.innerText = this.player[0].points;
    },

    changeTurn: function () {},

    placeSign: function () {
      if (this.innerText !== play.currentPlayerTurnSign) {
        this.innerText = play.currentPlayerTurnSign;
        this.changeTurn();
      }
    },
  };

  play.init();
  console.log(play.players);
  console.log(play.currentPlayerTurnSign);
})();
