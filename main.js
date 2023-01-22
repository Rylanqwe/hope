function flipCoin() {
  var betAmount = document.querySelector('input').value;
  var flip = Math.random() >= 0.5;
  var result = flip ? "heads" : "tails";
  document.querySelector('#result').innerHTML = "You flipped " + result + " and bet " + betAmount;
}
