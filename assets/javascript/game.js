//Variables
var purple = Math.floor(Math.random()*15+1);
var green = Math.floor(Math.random()*15+1);
var red = Math.floor(Math.random()*15+1);
var blue = Math.floor(Math.random()*15+1);

var userSelection;
var targetNumber = Math.floor(Math.random()*90+1);
var wins = 0;
var losses = 0;
var counter = 0;
var numIn = 0;

//Functions

//This resests the target number, crystal numbers and the counter.  Wins and losses should not be reset.
function reset() {
    targetNumber = [Math.floor(Math.random() * 90+1)];
    counter = 0;
    purple = Math.floor(Math.random()*15+1);
    green = Math.floor(Math.random()*15+1);
    red = Math.floor(Math.random()*15+1);
    blue = Math.floor(Math.random()*15+1);
}


//This pushes the wins, losses and target numbers to HTML
function renderHTML () {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("targetNumber").innerHTML = targetNumber;
    document.getElementById("counter").innerHTML = counter;
}

//When the page loads reset
$(document).ready(function() {
    reset();
    renderHTML();

// alert(red);  This shows that red has a random number associated to it
// $(".crystals").on("click", function() {
//     var numIn = $(this).val();          //Creates new variable numIn which is the value of whatever crystal is clicked.  This is in place of "#red"--$("#red").val
//     console.log(numIn);

    $("#red").on("click", function() {
    counter = counter + red;
    document.getElementById("counter").innerHTML = counter;
});
    $("#purple").on("click", function() {
    counter = counter + purple;
    document.getElementById("counter").innerHTML = counter;
});
    $("#green").on("click", function() {
    counter = counter + green;
    document.getElementById("counter").innerHTML = counter;
});
    $("#blue").on("click", function() {
    counter = counter + blue;
    document.getElementById("counter").innerHTML = counter;
});

    $(".crystals").on("click", function() {
     if(counter === targetNumber) {
        wins ++;
        alert("Congratulations, you won!"); 
        reset();
        renderHTML();
    } else if (counter > targetNumber) {
        losses ++;
        alert("Too bad, try again");
        reset();
        renderHTML();
    // } else {
    //     updateNumbers();
    // }
    }        

    });


});



