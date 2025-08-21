var userScore = 0;
var computerScore = 0;
$(document).on("click", "button", function () {
    var buttonId = this.id;
    var you = userImageChange(buttonId);
    var randomNumber = Math.floor(Math.random() * 3) + 1; // 1 to 3
    var computer = computerImageChange(randomNumber);
    resultChecker(you, computer);
});

function userImageChange(buttonId) {
    if (buttonId === "rock") {
        $("#you-image").attr('src', 'images/rock.png');
        return "rock";
    }
    else if (buttonId === "paper") {
        $("#you-image").attr('src', 'images/paper.png');
        return "paper";
    }
    else if (buttonId === "scissor") {
        $("#you-image").attr('src', 'images/scissor.png');
        return "scissor";
    }
}

function computerImageChange(randomNumber) {
    if (randomNumber === 1) {
        $("#computer-image").attr('src', 'images/rock.png');
        return "rock";
    }
    else if (randomNumber === 2) {
        $("#computer-image").attr('src', 'images/paper.png');
        return "paper";
    }
    else if (randomNumber === 3) {
        $("#computer-image").attr('src', 'images/scissor.png');
        return "scissor";
    }
}

function resultChecker(you, computer){
    if (you === computer) {
        $("#result").text("It's Draw!");
    }
    else if ((you === "rock" && computer === "scissor") ||
        (you === "paper" && computer === "rock") ||
        (you === "scissor" && computer === "paper")) {
        $("#result").text("You win!");
        userScore++;
        $("#you-score").text(userScore);

    }
    else {
        $("#result").text("Computer wins!");
        computerScore++;
        $("#computer-score").text(computerScore);
    }
}


