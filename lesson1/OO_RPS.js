/*

*/
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SCORES_TO_WIN = 5;
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissor', 'rock'],
  lizard: ['paper', 'spock']
};


function createPlayer() {
  return {
    move: null,
    score: 0,
  };
}


function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard or spock:');
        choice = readline.question().toLowerCase();
        if (VALID_CHOICES.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
      console.clear();
    },
  };

  return Object.assign(playerObject, humanObject);
}


function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
      this.move = VALID_CHOICES[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}


const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  roundWinner: null,

  displayWelcomeMessage() {
    let seeRules;
    console.clear();
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
    console.log(`First to win ${SCORES_TO_WIN} rounds wins the game!`)
    console.log('If you would like to see the rules, type "rules" ' +
      'or press "enter" to continue:');
    seeRules = readline.question().toLowerCase();
    if (seeRules === 'rules') {
      this.displayRules();
    }
    console.clear()
  },

  displayRules() {
    console.log('Rock crushes scissors and lizard\n' +
                'Paper covers rock and disproves Spock\n' +
                'Scissors cuts paper and decapitates lizard\n' +
                'Lizard eats paper and poisons Spock\n' +
                'Spock vaporizes rock and smashes scissors');
    this.continue();
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock.'
                + ' Goodbye');
  },

  displayScore() {
    let humanScore = this.human.score;
    let computerScore = this.computer.score;
    console.log(`You (${humanScore} - ${computerScore}) Computer`);
  },

  findRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    if (WINNING_MOVES[humanMove].includes(computerMove)) {
      this.roundWinner = 'human';
    } else if (humanMove === computerMove) {
      this.roundWinner = 'tie';
    } else {
      this.roundWinner = 'computer';
    }
  },

  displayRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if (this.roundWinner === 'human') {
      console.log('You win!');
    } else if (this.roundWinner === 'computer') {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie!");
    }
    this.continue();
  },

  addToWinnerScore() {
    if (this.roundWinner === 'human') {
      this.human.score += 1;
    } else if (this.roundWinner === 'computer') {
      this.computer.score += 1;
    }

  },

  hasSomeoneWon() {
    return (this.human.score === SCORES_TO_WIN
          || this.computer.score === SCORES_TO_WIN)
  },

  displayGrandWinner() {
    this.displayScore();

    if (this.human.score === SCORES_TO_WIN) {
      console.log('You are the Grand Winner!');
    } else {
      console.log('The computer is the Grand Winner!');
    }
  },

  setScoresToZero() {
    this.human.score = 0;
    this.computer.score = 0;
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question().toLowerCase();
    while (!(answer === 'y' || answer === 'n')) {
      console.log('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    console.clear();
    return answer === 'y';
  },

  continue() {
    console.log('Press "enter" to continue');
    readline.question();
    console.clear();

  },

  play() {
    this.displayWelcomeMessage();
    do {
      this.setScoresToZero();
      while (true) {
      this.displayScore();
      this.human.choose();
      this.computer.choose();
      this.findRoundWinner();
      this.displayRoundWinner();
      this.addToWinnerScore();
      if (this.hasSomeoneWon()) break;
      }
      this.displayGrandWinner();
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();

