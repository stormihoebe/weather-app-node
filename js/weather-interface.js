var apiKey = require('./../.env').apiKey;

$(function() {
$('#weatherReport').hide();
  $('#form').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey)
    .then(function(response) {
      $('#humidity').text(response.main.humidity + "%");
      $('#temperature').text(response.main.temp);

    })
    .fail(function(error){
      $('#humidity').text(error.responseJSON.message);
    });

    $('#weatherReport').show();
    $('#locationName').text(location);
  });
});
