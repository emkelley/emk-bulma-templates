// set chartjs font color to white globally//
Chart.defaults.global.defaultFontColor = '#edecf3';
Chart.defaults.global.defaultFontFamily = "'IBM Plex Sans'"


//Order Chart
var abc = document.getElementById('orderChart').getContext('2d');
var orderChart = new Chart(abc, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'Orders Shipped',
      data: [13, 19, 9, 13, 6, 3, 7],
      backgroundColor: "rgba(26, 100, 156,0.6)"
    }, {
      label: 'Orders Placed',
      data: [5, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(71, 175, 225,0.4)"
    }]
  }
});

//Ticket Chart
var def = document.getElementById("ticketChart").getContext('2d');
var ticketChart = new Chart(def, {
  type: 'horizontalBar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: 'Orders Per Month',
      data: [169, 174, 195, 187, 140, 150, 189, 210, 175, 150, 193, 139],
      backgroundColor: [
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)'
      ]
    }]
  }
});


// Stats counters //
$(".counter").each(function() {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo
    },

    {
      duration: 3500,
      easing: "linear",
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    }
  );
});
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});