// JavaScript Document
/*function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
*/
///second one
/*
function countdown(element, days, hours, minutes, seconds) {
    // Fetch the display element
    var el = document.getElementById(element);

    // Set the timer
    var interval = setInterval(function() {
        if(seconds == 0) {
            if(minutes == 0) {
			 if(hours==0){
                 if(days==0){
                (el.innerHTML = "STOP!");

                clearInterval(interval);
                return;
            } else {
                seconds = 60;
            }
        }}}

        if(days > 0) {
            var day_text = days + (days > 1 ? ' days' : ' day');
        }
        else {
            var day_text = '';
        }

         if(hours > 0) {
            var hour_text = hours + (hours > 1 ? ' hours' : ' hour');
        }
        else {
            var hour_text = '';
        }


         if(minutes > 0) {
            var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
        }

        else {
            var minute_text = '';
        }

        var second_text = seconds > 1 ? '' : '';
        el.innerHTML = days + "d " + hours + "hrs " + minutes + "min " + seconds + "sec ";


           // day_text + ' ' + hour_text + ' ' + minute_text + ' ' + seconds + ' ' + second_text + '';
        seconds--;
    }, 1000);
}
// Set the date we're counting down to
var countDownDate = new Date("Feb 12, 2018 11:42:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "hrs "
    + minutes + "min " + seconds + "sec ";
    document.getElementById("login").disabled=true;
    document.getElementById("username").disabled=true;
    document.getElementById("password").disabled=true;
    document.getElementById("cancel").disabled=true;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "";
        document.getElementById("login").disabled=false;
        document.getElementById("username").disabled=false;
        document.getElementById("password").disabled=false;
        document.getElementById("cancel").disabled=false;
        document.getElementById("demo").innerHTML="voting ends today at 6pm";
    };
}, 1000);
//Start as many timers as you want

var start1 = document.getElementById('demo');
var start2 = document.getElementById('timer2');

start1.onclick = function() {
    countdown('countdown1', 0, 1, 3, 15);
}

start2.onclick = function() {
    countdown('countdown2', 4, 1, 1, 10);
}


 */