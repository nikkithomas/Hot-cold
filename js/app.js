$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


var setCount=function(number){
  $("#count").text(number);
};
var count=+$("#count").text()+1;

var newGame=function(){
  generateNumber();
  setCount(0);
  $("#guessList li").remove();
  $("#feedback").text("Make your Guess!");
  clearUserGuess();

};

var generateNumber=function(){
  var generateNumber=Math.floor((Math.random()*100)+1);
}

var clearUserGuess=function(){
  $("input").val("")
};


var randomNumber=Math.floor((Math.random()*100)+1);



var guess=$("#guessButton").click(function(){
  var guessNumber=$("#userGuess").val();

  

if(guessNumber<=0||guessNumber>=101){
  alert("Please enter a number between 1 and 100.");
  return false
}

if(isNaN(guessNumber)){
  alert("Please enter only numbers between 1 and 100.");
  return false;
}

else{
  setCount(count);
  count++;
} 



  var difference=Math.abs(guessNumber-randomNumber);
  var display=$("guessList").text(guessNumber);
  
  

  if(difference===0){
    $("#feedback").text("You guessed it!");
    display
    $("#userGuess").val("");
    
    randomNumber=Math.floor((Math.random()*100)+1)
  

  }

  else if(difference<=10){
    $("#feedback").text("Hot!");
    display
    $("#userGuess").val("");
    $("#guessList").append("<li>"+guessNumber+"</li>");
    

    
  }

  else if (difference<=20){
    $("#feedback").text("Warm");
    display
    $("#userGuess").val("");
    $("#guessList").append("<li>"+guessNumber+"</li>");
    
    
  }
  else if (difference<=30){
    $("#feedback").text("Cold");
    display
    $("#userGuess").val("");
    $("#guessList").append("<li>"+guessNumber+"</li>");
    
  }

else{
  $("#feedback").text("Freezing!");
  display
    $("#userGuess").val("");
    $("#guessList").append("<li>"+guessNumber+"</li>");
  
};




$(".new").click(function(e){
  event.preventDefault();
  newGame();
});



});






});