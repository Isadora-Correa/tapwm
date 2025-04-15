const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const message = document.querySelector(".message");

const translate = {
  "PEDRA": "stone",
  "PAPEL": "paper",
  "TESOURA": "scissors"
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      const playerChoice = translate[option.innerHTML];
      const choice = ["STONE", "PAPER", "SCISSORS"];
      const arrayNo = Math.floor(Math.random() * 3);
      const computerChoice = choice[arrayNo];

      player.src = "../src/Player/" + playerChoice + "Player.png";
      computer.src = "../src/Computer/" + computerChoice.toLowerCase() + "Computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      // Verificar empate
      if (computerChoice === playerChoice.toUpperCase()) {
        message.innerHTML = "Empate!";
      } else if (playerChoice === "stone") {
        if (computerChoice === "PAPER") {
          computerPoints.innerHTML = cPoints + 1;
          message.innerHTML = "O computador ganhou!";
        } else {
          playerPoints.innerHTML = pPoints + 1;
          message.innerHTML = "Você ganhou!";
        }
      } else if (playerChoice === "paper") {
        if (computerChoice === "SCISSORS") {
          computerPoints.innerHTML = cPoints + 1;
          message.innerHTML = "O computador ganhou!";
        } else {
          playerPoints.innerHTML = pPoints + 1;
          message.innerHTML = "Você ganhou!";
        }
      } else if (playerChoice === "scissors") {
        if (computerChoice === "STONE") {
          computerPoints.innerHTML = cPoints + 1;
          message.innerHTML = "O computador ganhou!";
        } else {
          playerPoints.innerHTML = pPoints + 1;
          message.innerHTML = "Você ganhou!";
        }
      }
    }, 900);
  });
});
