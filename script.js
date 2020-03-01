
var counter = 0;
$(document).ready(function () {


    $(myDiv).hide();

    $("#start").click(function () {
        $("#start").hide();
        $(myDiv).show(1000);
        $('#part2').removeClass('display');
        $("#myCounter").text(counter);
    });

    $("li").mouseenter(function () {
        $(this).css("background-color", "yellow");
    });
    $("li").mouseleave(function () {
        $(this).css("background-color", "tan");
    });


    $("li").click(function () {
        // `this` is the DOM element that was clicked
        var index = $("li").index(this);
        $("span").text("You clicked answer #" + index);
        if (index == currentQuestion[4]) {
            $("h4").text("correct");
            $("#myCounter").text(++counter);
        } else {
            $("h4").text("wrong");
        }

    });

});

var questions = new Array();
questions[0] = new Array("question1", "answer 0", "answer 1", "answer 2", 0);
questions[1] = new Array("question2", "answer 0", "answer 1", "answer 2", 1);
questions[2] = new Array("question3", "answer 0", "answer 1", "answer 2", 2);


var myQ = document.createElement("p");
var myDiv = document.createElement("div");
var myOL = document.createElement("ol");
var myLI1 = document.createElement("li");
var myLI2 = document.createElement("li");
var myLI3 = document.createElement("li");
var currentQuestion = questions[0];
myQ.textContent = currentQuestion[0];
myLI1.textContent = currentQuestion[1];
myLI2.textContent = currentQuestion[2];
myLI3.textContent = currentQuestion[3];
myOL.appendChild(myLI1);
myOL.appendChild(myLI2);
myOL.appendChild(myLI3);
myDiv.appendChild(myQ);
myDiv.appendChild(myOL);
//$("#main").append(myDiv);
document.getElementById("main").appendChild(myDiv);

var i = 0;
var nextQuestion = function () {

    i++;
    currentQuestion = questions[i];
    myQ.textContent = currentQuestion[0];
    myLI1.textContent = currentQuestion[1];
    myLI2.textContent = currentQuestion[2];
    myLI3.textContent = currentQuestion[3];
}




function next() {
    alert("hi")
    //currentQuestion = questions[1]
    // for (var i = 1; i < questions.length; i++) {
    //currentQuestion = questions[i];
    //  }
}
