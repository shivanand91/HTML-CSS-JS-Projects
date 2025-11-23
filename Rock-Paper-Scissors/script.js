let userScore = 0;
let compScore = 0;

const Choices = document.querySelectorAll(".box");
const msg = document.querySelector("#resultBtn");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const computerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  // console.log(randIdx);
  return options[randIdx];
};

const drawGame = () => {
//   console.log("Game Was Draw!");
  msg.innerText = "Game Was Draw!";
  msg.style.backgroundColor = "rgb(6, 6, 34)";
};

const showWinner = (userWin) =>{

    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose!");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const PlayGame = (userChoice) => {
//   console.log("User Choice =", userChoice);
  const compChoice = computerChoice();
//   console.log("Computer Choice =", compChoice);

  if(compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userChoice === "rock"){
       userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    }
    else{
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
  }

};

Choices.forEach((box) => {
  box.addEventListener("click", () => {
    const userChoice = box.getAttribute("id");
    PlayGame(userChoice);
  });
});
