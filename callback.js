// script.js

function countdown(number, callback) {
    var countdownElement = document.getElementById('countdown');
  
    function updateCountdown() {
      countdownElement.innerText = number;
    }
  
    function finishCountdown() {
      countdownElement.innerText = '';
      callback();
    }
  
    function doCountdown() {
      if (number > 0) {
        updateCountdown();
        setTimeout(function () {
          number--;
          doCountdown();
        }, 1000);
      } else {
        finishCountdown();
      }
    }
  
    doCountdown();
  }
  
  countdown(10, function () {
    var greetingElement = document.getElementById('greeting');
    greetingElement.innerText = 'Happy Independence Day!';
  });
  