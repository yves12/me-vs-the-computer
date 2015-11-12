var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var things = ['rock', 'paper', 'scissors'];
    var thing = things[Math.floor(Math.random()*things.length)];
    return thing;

}
// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    if (userValue == aiValue){
       setScore(null,1);
       return "draw";   
    } else if(userValue == "paper" && aiValue =="rock"){
        setScore('userPoint',1);
        return "user";
        
    } else if(userValue == "scissors" && aiValue =="paper"){
        setScore('userPoint',1);
        return "user";
        
    } else if(userValue == "rock" && aiValue =="scissors"){
        setScore('userPoint',1);   
        return "user";
        
    } else if(userValue == "paper" && aiValue =="rock"){
        setScore('aiPoint',1);    
        return "ai";
        
    } else if(userValue == "scissors" && aiValue =="paper"){
        setScore('aiPoint',1);     
        return "ai";
        
    } else if(userValue == "rock" && aiValue =="scissors"){
        setScore('aiPoint',1);
        return "ai";
        
    }
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    console.log('USER', userValue);
    var aiValue = getAISelection();
    console.log('AI', aiValue);

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
    console.log('HELLO WORLD');
 $('.token').on('click', function(event){
   console.log(event.target)
   evaluate(event);
    });   
});
