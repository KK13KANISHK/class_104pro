// random value generated
var y = Math.floor(Math.random() * 10 + 1);


// function for number guessed by user 
var x = document.getElementById("guessField").value;


// made for correct Guess
function submit(){
if(x == y)
{
    alert("CONGRATULATIONS!!!" +player_name+ "YOU GUESSED IT RIGHT!!! YOUR ANSWER" +guessField);

    guess = 1;

}

// counting the number of guesses
if (x > y) 
{
    guessField++;
    alert("OOPS sorry you got it wrong");
    
} else 
{
    guessField++;
    alert("OPPS sorry you got it wrong");

}
}


function playAgain()
{
   alert("THE CORRECT ANSWER IS " + y + " REFRESH THE PAGE TO TRY AGAIN")
}