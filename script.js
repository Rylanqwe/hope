var balance = 1000;

function flipCoin() {
    var betAmount = document.querySelector('input').value;
    var flip = Math.random() >= 0.5;
    var result = flip ? "heads" : "tails";
    document.querySelector('#result').innerHTML = "You flipped " + result;
    if(result === "heads"){
        balance += parseInt(betAmount);
    }else{
        balance -= parseInt(betAmount);
    }
    document.querySelector('#balance').innerHTML = "Your balance is: " + balance;
    $.ajax({
        type: "POST",
        url: "flipCoin.php",
        data: { betAmount: betAmount }
    }).done(function(result) {
        $("#result").html(result);
    });
}
