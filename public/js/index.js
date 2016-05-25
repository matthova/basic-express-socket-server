$(document).ready( function() {
  $("#the-time").text(new Date());
  var socket = io.connect('/');
  socket.on('update', function (data) {
    // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    // $('body').css("background-color", hue);
    $("#the-time").text(new Date());
  });
});
