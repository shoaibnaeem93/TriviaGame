$( document ).ready(function() {
    console.log( "ready!" );
});

//initial variables//
var timeLeft= 31; //30 second timer
var correctAnswers= 0;
var incorrectAnswers= 0;
var unansweredQuestions= 0;

//array of answers//
var answerArray1= ["Italy", "Brazil", "Germany", "France", "Argentina"]; // Who won the 1994 World Cup?
var answerArray2= ["Atletico Madrid", "FC Barcelona", "Real Madrid", "Valencia CF", "Athletic Bilbao"]; //Estadio Santiago Bernabeu is the home stadium to which La Liga club?//
var answerArray3= ["Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane", "Ronaldihno", "Zlatan Ibrahimovic"]; // Who holds the record for most Uefa Champions League Goals?//
var answerArray4= ["FOFA", "NFA", "FFA", "FIFA", "MLS"]; // The official governing body for soccer is?
var answerArray5= ["3", "2", "6", "5", "4"]; //The FIFA World Cup takes place every____ years?//

//function that starts the timer that goes down by 1 second//
function countDown() {
    intervalId= setInterval(decrement, 1000);
}

// function for our time going down by one second
function decrement() {
    timeLeft--;
    $("#timer").html("Time Left: " + timeLeft + "seconds");
    

if (timeLeft === 0) {
    stop();
    alert("Time is up!")
    resultsPage(); //takes user to page that shows results
    
}

}
// our stop function
function stop() {
    clearInterval(intervalId);
    checkResponses();
}

//our result page...im sure I can condense this and make it easier to create a result page..
function resultsPage() {
    var removeSections = ["#timer", "#trivia1", "#trivia2", "#trivia3", "#trivia4", "#trivia5", "#response1a", "#response2a", "#response3a", "#response4a", "#response5a"];
    for (i = 0; i < removeSections.length; i++) {
    $(removeSections[i]).remove();
    }
    var addStats = ["#Finished", "#correctAnswers", "#incorrectAnswers", "#unansweredQuestions", "#triviaTitle"];
    $(addStats[0]).html("Finished!");
    $(addStats[1]).html("Correct Answers: " + correctAnswers);
    $(addStats[2]).html("Incorrect Answers: " + incorrectAnswers);
    $(addStats[3]).html("Unanswered: " + unansweredQuestions); 
}

/* this function holds the correct answers..I cant get the correct/incorrect answer values to go up or down in the result
page..I think my function setup might be wrong or I might be using 'this' incorrectly*/

function checkResponses() {
    $("input[type=radio][name=response1a]").append(function(){
        if (this.value === "Brazil" && this.checked) {
            correctAnswers++;
        } 
        else  {
            incorrectAnswers++;
        }
    });

    $("input[type=radio][name=response2a]").append(function(){
        if (this.value == "Real Madrid" && this.checked) {
            correctAnswers++;
        }
        else {
            incorrectAnswers++;
        }
    });

    $("input[type=radio][name=response3a]").append(function(){
        if (this.value == "Cristiano Ronaldo" && this.checked) {
            correctAnswers++;
        }
        else {
            incorrectAnswers++;
        }
    });
    $("input[type=radio][name=response4a]").append(function(){
        if (this.value == "FIFA" && this.checked) {
            correctAnswers++;
        }
        else  {
            incorrectAnswers++;
        }
    });
    $("input[type=radio][name=response5a]").append(function(){
        if (this.value === "4" && this.checked) {
            correctAnswers++;
        }
        else  {
            incorrectAnswers++
        }
    });
}

//sets our trivia questions into the html

function triviaQuestions() {
    $("#trivia1").html("Who won the 1994 World Cup?");
    $("#trivia2").html("Estadio Santiago Bernabeu is the home stadium to which La Liga club?");
    $("#trivia3").html("Who holds the record for most Uefa Champions League Goals?");
    $("#trivia4").html("The official governing body for soccer is?");
    $("#trivia5").html("The FIFA World Cup takes place every ____ years?");
}

//we append the correct answer values we set above into our triviaResponses function

function triviaResponses() {

    for (i = 0; i < answerArray1.length; i++) {
        $("#response1a").append("<input type='radio' name='response1a' value= " + answerArray1[i] + ">" + "<label>"+ answerArray1[i] + "</label>");
    }


    for (i = 0; i < answerArray2.length; i++) {
        $("#response2a").append("<input type='radio' name='response2a' value= " + answerArray2[i] + ">" + "<label>" + answerArray2[i] + "</label>");
    }

	
    for (i = 0; i < answerArray3.length; i++) {
        $("#response3a").append("<input type='radio' name='response3a' value= " + answerArray3[i] + ">" + "<label>" + answerArray3[i] + "</label>");
    }


    for (i = 0; i < answerArray4.length; i++) {
        $("#response4a").append("<input type='radio' name='response4a' value= " + answerArray4[i] + ">" + "<label>" + answerArray4[i] + "</label>");
    }


    for (i = 0; i < answerArray5.length; i++) {
        $("#response5a").append("<input type='radio' name='response5a' value= " + answerArray5[i] + ">" + "<label>" + answerArray5[i] + "</label>");
    }
}

//function to start the game//
$("#startGame").click(function() {
    $("#startGame").remove();
    countDown();
    setTimeout(function() {
        triviaQuestions();
        triviaResponses();
    }, 1000);
    })
