const CHOICES = ['rock', 'paper', 'scissors']

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const getComputerChoice = () => {
  return CHOICES[getRandomInt(CHOICES.length)]
}

const getPlayerChoice = () => {
  return prompt("Please type rock/paper/scissors!")
}


const playRound = (player1Choice, computer1Choice) => {
  let playerChoice = player1Choice();
  let computerChoice = computer1Choice();

  if (playerChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors') {
    return `Player1 Wins! ${playerChoice} beats ${computerChoice}.`
  } else if(playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    return `Player1 Wins! ${playerChoice} beats ${computerChoice}.`
  } else if(playerChoice === 'paper' && computerChoice === 'rock'){
    return `Player1 Wins! ${playerChoice} beats ${computerChoice}.`
  }
  else if(playerChoice === computerChoice){
    return `It's a draw!  No one wins.`
  } else {
    return `You Lose! ${computerChoice} beats ${playerChoice}.`
  }
}


for (let i = 0; i < 5; i++){
  console.log(playRound(getPlayerChoice, getComputerChoice))
}
