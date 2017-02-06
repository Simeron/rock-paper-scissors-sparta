$(() => window.rps = new RockPaperScissors());

class RockPaperScissors{
    constructor(){

        this.moves = ["rock", "paper", "scissors"];

        this.winMatrix = [
            ["draw", "player", "computer"],
            ["computer", "draw", "player"],
            ["player", "computer", "draw"]
        ];

        this.moveButtons = $('.move-buttons div');

        this.scoreBoard = {
            player: $('#playerScore'),
            computer: $('#computerScore')
        };

        this.playerMove;
        this.computerMove;

        this.message = $('#message');

        this.addEventListeners();
    }

    addEventListeners(){
        this.moveButtons.each((i, button) => $(button).click(this.play.bind(this)));
    }

    play(){
        this.getMoves(event);
        this.getWinner();
        this.updatePage();
    }

    getMoves(event){
        //Get the player move - this gets the players moves and gives it a number 
        this.playerMove = this.moves.indexOf(event.target.id);
        //Get the computers move - computer moves is generatated from the math.random and math.floor - the number is from 0,1,2 becasue of the array 
        this.computerMove = Math.floor(Math.random()*3);
    }

    getWinner(){
        //Check who has won - Use a matrix
        //the winner variable is holding the moves of the computer and the player, and then comparing who the winner is, using the numbers (grid) of the matrix which is 3 arrays nested in 1 array. 
        this.winner = this.winMatrix[this.computerMove][this.playerMove];
    }

    updatePage(){
        //Update the page to show who has won, lost or draw
        //this is meant (but is currently not working) to update the scores of the the player and the computer. It adds on one every time and then displays a message depending on the result.'let currentScore' is new variable being made
       console.log(this.winner);
        if(this.winner !== "Draw"){
            let currentScore = parseInt(this.scoreBoard[this.winner].html());
            currentScore++; 
            this.scoreBoard[this.winner].html(currentScore);
            $(this.message).text(`${this.winner} wins!`);
        }else{
            $(this.message).text("It's a draw!");
        }
    }
}



// var scores = scores;

// var player = function(option){
//     userSelected = document.getElementById(userOption);
// }

// function gamePlay(){
//     return Math.floor(Math.random() *3);
//     // var computerOption = math.floor();
    
//     // if(computerOption < 0.33){
//     //     computerOption = "rock";
//     // }else if(computerOption <= 0.66){
//     //     computerOption = "paper";
//     // }else{
//     //     computerOption = "scissor";
//     // }

//     // resultMessage = compare(userOption, computerOption);

//     // document.getElementById("results").innerHTML = "<p>User select: " + userOption +|"computer select:" + computerOption + "</p> <p>" + resultMessage + "</p>";
// }

// function compare(userOption, computerOption){
//         if(userOption == undefined){
//         return "please select an option"
//         }

//     if(userOption == computerOption){
//         return "its a draw"
//     }
//     if(userOption == "rock"){
//         if(computerOption == "sicissors"){
//             return "you win";
//         } else{
//             return "computer wins";
//         }
//     }else if (userOption == "paper"){
//         if(computerOption == "rock"){
//             return "you win";
//         }else if("scissor"){
//             return "computer wins"
//         }
//     } else if(userOption == "scissor"){
//         if(computerOption == "rock"){
//             return "computer wins";
//         }else{
//             return "you win";
//         }
//     }

//     scores = compare;
// }