$(function() {
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var balance = 100;
  $(".balance").text("Balance: $" + balance);
  
  function bettingGame () {
    var betAmount = $("#betAmount").val();
    var userGuess = $("#userGuess").val();
    var randomNumber = getRandomIntInclusive(1, 10).toString();
    var validBet = (5 <= betAmount && betAmount <= 10 && betAmount < balance) ? "true" : "false";
    var validGuess = (1 <= userGuess && userGuess <=10) ? "true" : "false";

    if (validGuess === "true" && validBet === "true") {
      if (userGuess === randomNumber) {
        balance += parseInt(betAmount);
        $("#alertDiv").text("You guessed the correct number! You won $" + betAmount + " and now have a balance of $" + balance + ".");
      } else if (Math.abs(userGuess - randomNumber) === 1) {
        balance = balance;
        $("#alertDiv").text("So close! You were off by 1 so we push the bet. You still have a balance of $" + balance +".");
      } else {
        balance -= betAmount;
        $("#alertDiv").text("Too bad! You guessed " + userGuess + ". The number was " + randomNumber + ". You lost $" + betAmount + " and now have a balance of $" + balance + ".");
      }
      $(".balance").text("Balance: $" + balance);
    } else {
      $("#alertDiv").text("Invalid Bet/Guess Combination. Please enter valid inputs.");
    }
    // $("#betAmount").val("");
    // $("#userGuess").val("");
  }
  
  $("#playButton").on( "click" , function(){
    bettingGame();
  });

  // $("#newGameButton").on( "click" , function() {
  //   balance = 100;
  //   $("#balanceDiv").text("Balance: $" + balance);
  //   $("#alertDiv").text("");
  //   $("#betAmount").val("");
  //   $("#userGuess").val("");
  // });
});


