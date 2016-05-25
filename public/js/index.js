$(document).ready( function() {
  $("#the-time").text(new Date());
  var socket = io.connect('/');
  socket.on('update', function (data) {
    $("#the-time").text(new Date());
  });
});
