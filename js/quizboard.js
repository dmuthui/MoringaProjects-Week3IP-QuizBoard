//Declaration of constants before allocation to functions
const myAnswers = document.querySelectorAll(".ouranswers");
const finishButton = document.querySelector("#complete");
const scoreMessage = document.querySelector("#scorecard");
const resetButton = document.querySelector("#myform");
let total = 0;
let score = 0;

// Clear button to clear the page to null values
function fun() {
  document.getElementById("#myform").reset();
}

//Answer for each value is passed to the total.
myAnswers.forEach(function (answer) {
  total += parseInt(answer.value);
});


//Function that calculates the marks for each question marks and computes it to the final score
finishButton.addEventListener("click", function (e) {
  myAnswers.forEach(function (answer) {
    if (answer.checked) {
      score += parseInt(answer.value);
    }
  });

  //Percentage scores narratives for all the questions handled and the final score computation
  let percentageScore = parseInt((score / total) * 100).toFixed();
  let comments = "";

  if (percentageScore > 80) {
    comments += "Excellent! You have scored: " + percentageScore + "%";
  }
  else if (percentageScore >= 50 && percentageScore <= 80) {
    comments += "Good job! You have scored: " + percentageScore + "%";
  } else {
    comments += "Poorly Done!You need to retake the Quiz: You have scored: " + percentageScore + "%";
  }

//Displays the final score message and restricts the submit button to output another consecutive score message.
  scoreMessage.innerHTML = comments;
  score -= score;

});

//Allows display of scores under final score when submit button is clicked
$("#complete").click(function () {
  $(".ouranswers").attr("disabled", "true");
  $("#scorepost").removeClass("d-none");
});

//Adds effects to the image buttons at the top of the page
$(document).ready(function () {
  $("#btn1").click(function () {
    $("#img1").hide(2000);
    $("#img2").hide(2000);
  })
  $("#btn2").click(function () {
    $("#img1").show(2000);
    $("#img2").show(2000);
  })

  $("#btn3").click(function () {
    $("#img1").toggle(2000);
    $("#img2").toggle(2000);
  })

});

