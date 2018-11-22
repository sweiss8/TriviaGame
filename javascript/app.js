
// Create HTML Template for Welcome Screen
// Create HTML Template for Questions
// onclick function to start game
// onclick function to check answer
    //Create objects for each question
        //

        //global counter display question and loop through the array.

//Question Objects - make array of objects?
$(document).ready(function() {

var correct = 0;
var incorrect = 0;
var displayCounter = 0;
var n = 12;
var intervalId;

var qArray = [{
    question: {
        cheese: "What is the 'Scouring of the Shire'?",
        answer: "2",
        optionOne: "A. Frodo leaves the shire in the first chapter",
        optionTwo: "B. Saruman takes over the shire with the help of the Southrons!",
        optionThree: "C. Sam seeing Orcs invading the shire in the mirror of Galadriel",
        optionFour: "D. Trick question - that's not a part of the book",
     }},
     {question: {
        cheese: "When did Frodo send Sam away?",
        answer: "4",
        optionOne: "A. After he asked if he could help carry the Ring",
        optionTwo: "B. After they lose Gandalf in Moria",
        optionThree: "C. When Frodo thinks Sam ate all the Lembas",
        optionFour: "D. Frodo never sends Sam away",
     }},
  
    {question: {
        cheese: "What unexpected help comes at the battle of Helm's Deep?",
        answer: "1",
        optionOne: "A. The Huorns",
        optionTwo: "B. The Elves",
        optionThree: "C. Soldiers from Gondor",
        optionFour: "D. The Dwarves",
     }},

    {question: {
        cheese: "Who is Tom Bombadil married to?",
        answer: "2",
        optionOne: "A. Mary Bombadil",
        optionTwo: "B. Goldberry",
        optionThree: "C. Luthien",
        optionFour: "D. Tom Bombadil is not in the books",
     }

    }];



function welcomeScreen(){
    var welcome = $("<div class=welcome>");
    var instructions = $("<div class=instructions>");
    var start = $("<button id=startButton>");
    welcome.text("Welcome to Lord of the Rings Trivia Game!");
    instructions.html("<p>This trivia is designed to see if you've actually read the books, or just seen the movie.</p><p>You have 12 seconds to answer each question. Press 'Start' to begin. Good luck!</p>");
    start.text("Start");
    $(".container").append(welcome, instructions, start);
    
};



function startGame() {
    $(".container").empty("");
    run();
    var timer = $("<div class=timer>");
    var question = $("<div class=question>");
    var optionA = $("<button class=options>").attr("data-value", 1);
    var optionB = $("<button class=options>").attr("data-value", 2);
    var optionC = $("<button class=options>").attr("data-value", 3);
    var optionD = $("<button class=options>").attr("data-value", 4);
    question.text(qArray[displayCounter].question.cheese);
    timer.html("<h2>Timer: " + n + "</h2>");
    optionA.text(qArray[displayCounter].question.optionOne);
    optionB.text(qArray[displayCounter].question.optionTwo);
    optionC.text(qArray[displayCounter].question.optionThree);
    optionD.text(qArray[displayCounter].question.optionFour);
    $(".container").append(question, timer, optionA, optionB, optionC, optionD);
};


function closingFunction() {
    $(".container").empty("");
    var score = $("<div class=score>");
    var correctAnswers = $("<p class=correctAnswers>")
    var incorrectAnswers = $("<p class=incorrectAnswers>")
    var tryAgain = $("<button id=tryAgain>");
    score.text("Your Score:");
    correctAnswers.text("Correct: " + correct);
    incorrectAnswers.text("Incorrect: " + incorrect);
    tryAgain.text("Try Again");
    $(".container").append(score, correctAnswers, incorrectAnswers, tryAgain);
    displayCounter = 0;
}

function run () {
    n = 12;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    n--;
    $(".timer").html("<h2>Timer: " + n + "</h2>");
    if (n === 0) {
        $(".timer").html("<h2>Time's up!</h2>");
        stop();
        displayCounter++;
        incorrect++;
        setTimeout(startGame, 2000);
        
    }
}

function stop() {
    clearInterval(intervalId);
  }


welcomeScreen();

$(".container").on("click", "#startButton", function(){
    startGame();
});

$(".container").on("click", "#tryAgain", function(){
    startGame();
});


$(".container").on("click", ".options", function click(){
   var answer = $(this).data("value");
   stop();
    if(parseInt(answer) === parseInt(qArray[displayCounter].question.answer) && (displayCounter < 3)) {
    displayCounter++;
    correct++;
    $(".timer").html("<h2>Correct!</h2>");
    setTimeout(startGame, 2000);

    } else if (parseInt(answer) === parseInt(qArray[displayCounter].question.answer) && (displayCounter = 3)) {
        correct++;
        $(".timer").html("<h2>Correct!</h2>");
        setTimeout(closingFunction, 2000);

    } else if(parseInt(answer) !== parseInt(qArray[displayCounter].question.answer) && (displayCounter < 3)) {

        $(".timer").html("<h2>Incorrect!</h2>");
        displayCounter++;
        incorrect++;
        setTimeout(startGame, 2000);
    } else {
        $(".timer").html("<h2>Correct!</h2>");
        incorrect++;
        setTimeout(closingFunction, 2000);
    };

});  


});
