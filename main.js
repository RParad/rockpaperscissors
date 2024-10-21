
// Call to retrieve the elements
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var playBtn = document.getElementById("playgame");

// Create listeners for the buttons

playBtn.addEventListener('click', function(){
    playGame();
})

// var rockChoice = rockBtn.addEventListener("click", function(e) {
//                     // clicked = true;
//                     console.log("Button has been clicked")
//                     return clickResponse;
//                     } );  

// var paperChoice = paperBtn.addEventListener("click", function(e) {
//                     // clicked = true;
//                     console.log("Button has been clicked")
//                     return "paper";
//             } );  

// var scissorsChoice = scissorsBtn.addEventListener("click", function(e) {
//                     // clicked = true;
//                     console.log("Button has been clicked")
//                     return "scissors";
//             } );  
     
            function playGame() {
                let humanScore = 0
                let computerScore = 0



                while (humanScore <= 4 && computerScore <= 4 ) {
                    
                    var rockChoice = rockBtn.addEventListener("click", function(e) {
                        // clicked = true;
                        console.log("Button has been clicked")
                        return 'rock';
                        } );  
    
                    var paperChoice = paperBtn.addEventListener("click", function(e) {
                        // clicked = true;
                        console.log("Button has been clicked")
                        return "paper";
                    } );  
    
                     var scissorsChoice = scissorsBtn.addEventListener("click", function(e) {
                        // clicked = true;
                        console.log("Button has been clicked")
                        return "scissors";
                     } );  
         
            
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
                

                function getHumanChoice(clickResponse) { 
                    // let inputPrompt = prompt("Rock, Paper, Scissors? ").toLowerCase();
                    // // let inputPrompt = inputPrompt.toLocaleLowerCase();
                    // // return lowerCaseInput;
                    // return inputPrompt;
                    // Try get the choice of the player


                };
            
                

                // console.log(getHumanChoice())

                // Step 4: player scores
                // let humanScore = 0
                // let computerScore = 0

                // Step 5: Write single game logic 
                const humanChoice = getHumanChoice();
                const computerChoice = getComputerChoice();

                function playRound(humanChoice, computerChoice) {
                   

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
            // if (humanScore >= 5) {
            //     return console.log("Game over! You Win")
            // }
            // else  {
            //     return console.log("Game over! You lose")
            // }
        } 
            
            // playGame();

            // function playGame() {
            //     if (humanScore <= 5 || computerScore <= 5 ) {
            //         playRound()
            //     }
            // }
            // playRound()
            // number increment and score has been added!

        