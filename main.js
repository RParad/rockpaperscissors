
            
            function playGame() {
                let humanScore = 0
                let computerScore = 0
                while (humanScore <= 4 && computerScore <= 4 ) {
                    
                
            
                // Step two: Create a function for get computer
                // function randomly returns a value  ---- Completed
                function getComputerChoice() {
                    
                    // function getRandomInt(max) {
                    //     return Math.floor(Math.random() * max);
                    // }
                    let choice = Math.floor(Math.random() * 3);
                    if (choice === 0) {
                    return ("rock");
                    } 
                    else if (choice === 1) {
                    return ("paper");
                    }
                    else {
                    return ("scissors");
                    }
                };
                
            
                // getComputerChoice() check to see if works completed

                // Step 3: Get human input
                // function is required which takes input of human
                

                function getHumanChoice() { 
                    let inputPrompt = prompt("Rock, Paper, Scissors? ").toLowerCase();
                    // let inputPrompt = inputPrompt.toLocaleLowerCase();
                    // return lowerCaseInput;
                    return inputPrompt;
                };
                
                

                // console.log(getHumanChoice())

                // Step 4: player scores
                // let humanScore = 0
                // let computerScore = 0

                // Step 5: Write single game logic 
                

                function playRound(humanSelection, computerSelection) {
                    const humanChoice = getHumanChoice();
                    const computerChoice = getComputerChoice();

                    if (humanChoice == "rock" && computerChoice == "scissors" ||
                        humanChoice == "scissors" && computerChoice == "paper" ||
                        humanChoice == "paper" && computerChoice == "rock") {

                        humanScore++;    
                        return console.log("You win! " + humanChoice + " beats " + computerChoice + "!" + " Your score is " + humanScore + " Computer score: " + computerScore)
                        }
                    else if (humanChoice == computerChoice) {
                    
                    return console.log("It's a Draw! Both picked " + computerChoice + ", The score is: " + "Human: " + humanScore + " Bot: " + computerScore)
                        }
                    else {
                        computerScore++;
                        return console.log("You lose! " + computerChoice + " beats " + humanChoice + " Your Score: " + humanScore + " Computer score: " + computerScore)
                    }        
                    return;
                }

                playRound ();

            }
            if (humanScore >= 5) {
                return console.log("Game over! You Win")
            }
            else  {
                return console.log("Game over! You lose")
            }
        }
            
            playGame();

            // function playGame() {
            //     if (humanScore <= 5 || computerScore <= 5 ) {
            //         playRound()
            //     }
            // }
            // playRound()
            // number increment and score has been added!

        