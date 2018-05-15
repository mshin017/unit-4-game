var counter = 0;
var targetNum = Math.floor(Math.random() * 102) + 19;;
var win = 0;
var lose = 0;



function start() {
    targetNum = Math.floor(Math.random() * 102) + 19;
    // console.log(targetNum);
    $("#genNum").text(targetNum);
};

function winALERT () {
    alert("YOU WIN!!!!")
    win++
    reset();
    updateStats();
}

function loseALERT() {
    alert("YOU LOSE!!!")
    lose++
    reset();
    updateStats();
};

var gemNumGen = function() {
    for (i=1; i<5;i++){
        $('#gems-'+[i]).val( Math.floor(Math.random() * (12 - 1 + 1)) + 1 );
        console.log(gemNumGen)
    }
}

$(".gems").on("click",function(){
    var gemValue = this.value;
    gemValue = parseInt(gemValue);
    counter += gemValue;
    
    $('#sum').html("<h2>" + counter + "</h2>");

    if (counter == targetNum) {
        winALERT();
    }
    else if (counter > targetNum) {
        loseALERT();
    }
});

var updateStats = function() {
    var stats =  "<ul>" +"<li><p>Wins: " + win + "</p></li>" +
            "<li><p>Losses: " + lose + "</p></li>" +
        "</ul>";
    $("#winLose").html(stats);

};
function reset() {
    counter = 0;
    targetNum = 0;
    start();
    gemNumGen();
};
  
window.onload=function(){
    reset();
    updateStats();
}

