<?php
if (isset($_POST['betAmount'])) {
    $betAmount = $_POST['betAmount'];
    $flip = rand(0,1);
    $result = $flip ? "heads" : "tails";
    echo "You flipped " . $result . " and bet " . $betAmount;
}
?>
$.ajax({
  type: "POST",
  url: "flipCoin.php",
  data: { betAmount: betAmount }
}).done(function(result) {
  $("#result").html(result);
});
