const countdownDisplay = document.getElementById("countdown-display");

var christmas = new Date("Dec 25, 2021 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = christmas - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  countdownDisplay.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    countdownDisplay.innerHTML = "EXPIRED";
  }
}, 1000);