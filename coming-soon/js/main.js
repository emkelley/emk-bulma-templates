
// ♫ ♫ ITS THE FINAL COUNTDOWN ♫ ♫ //

var endingDate = new Date("Nov 14, 2018 13:37:00").getTime();
var x = setInterval(function() {
    var current = new Date().getTime();
    var remainingTime = endingDate - current;
    
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = days + "<span>D</span> " + hours + "<span>H</span> "
    + minutes + "<span>M</span> " + seconds + "<span>S</span> "; 
    
    // If the count down is over, write some text 
  
    // if (remainingTime < 0) {
    //    clearInterval(x);
    //    document.getElementById("countdown").innerHTML = "yay";
    // } 
  
}, 1000);

/* ---- particles.js config ---- */
