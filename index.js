const CHOICES = ['rock', 'paper', 'scissors']

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

function removeClass(elements, ){
  elements.forEach((element) => {
    let elementClass = element.className.split(' ')
    element.classList.remove(elementClass[1])
  })
}

function addClass(elements, className){
  elements.forEach((element) => {
    element.classList.add(className)
  })
}

function showChoices(e){
  let container = document.getElementById('buttons-cotainer')
  let banner = document.getElementById('banner')
  let clikMe = document.getElementById('click-me');
  banner.innerText = "FIGHT FOR YA LIFE! FIGHT FOR YA LIFE! FIGHT FOR YA LIFE!"
  e.target.remove()

  choices.forEach(button => {
    button.style.visibility = 'visible'
  })

  paperRockScissors.forEach(elements => removeClass(elements, 'celebrate'))

  //add classes back in a different way just to practice
  addClass(paperRockScissors[0], 'paper')
  addClass(paperRockScissors[1], 'rock')
  addClass(paperRockScissors[2], 'scissors')
  addClass(paperRockScissors[3], 'cross')
}

function makeClickMeButton(parentDiv){
  let button = document.createElement("button")
  button.classList.add('center')
  button.id = 'click-me'
  button.addEventListener('click', showChoices)
  button.innerText = "Click me to play again."
  parentDiv.appendChild(button)
  button.style.visibility = 'visible'
}

function playRound(e){
  let parentDiv = e.target.closest('div')
  choices.forEach(button => {
    button.style.visibility = 'hidden'
  })

  playerChoice = e.target.id || e.target.parentElement.id
  let computerChoice = CHOICES[getRandomInt(CHOICES.length)]
  paperRockScissors.forEach(elements => removeClass(elements))
  paperRockScissors.forEach(elements => addClass(elements, 'celebrate'))
  let banner = document.getElementById('banner')

  if (playerChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors') {
    playerWins += 1
    if(playerWins === 5){
      banner.innerText = `Player1 Wins! ${playerChoice} beats ${computerChoice}.`
    }
  } else if(playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    playerWins += 1
    if(playerWins === 5){
      banner.innerText = `Player1 Wins! ${playerChoice} beats ${computerChoice}.`
    }
  } else if(playerChoice === 'paper' && computerChoice === 'rock'){
    playerWins += 1
    if(playerWins === 5){
      banner.innerText = `Player1 Wins! ${playerChoice} beats ${computerChoice}.`
    }
  } else {
    computerWins += 1
    if (computerWins === 5) {
      banner.innerText = `You Lose! ${computerChoice} beats ${playerChoice}.`
    }
  }

  if(playerWins === 5 || computerWins === 5){
    computerWins = 0
    playerWins = 0
  }
  console.log(playerWins)
  console.log(computerWins)
  makeClickMeButton(parentDiv)
}

  let computerWins = 0
  let playerWins = 0


  let papers = Array.from(document.querySelectorAll('.paper'))
  let rocks = Array.from(document.querySelectorAll('.rock'))
  let scissors = Array.from(document.querySelectorAll('.scissors'))
  let crosses = Array.from(document.querySelectorAll('.cross'))
  const paperRockScissors = [papers, rocks, scissors, crosses]

//grab all button choices
const choices = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button and add click event
choices.forEach((choice) => {
  // and for each one we add a 'click' listener
  choice.addEventListener('click', playRound)
});

