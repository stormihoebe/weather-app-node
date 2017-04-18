var apiKey = require('./../.env').apiKey;

$(function() {
$('#weatherReport').hide();
  $('#form').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&appid=' + apiKey)
    .then(function(response) {
      $('#humidity').text(response.main.humidity + "%");
      $('#temperature').text(response.main.temp + " F");
      $('#pressure').text(response.main.pressure + " hPa");
      $('#windSpeed').text(response.wind.speed + " miles/sec");
      $('#windDirection').text(response.wind.deg + " degrees");
      $('#clouds').text(response.clouds.all + "%");
      $('#locationName').text(response.name);

    })
    .fail(function(error){
      $('#humidity').text(error.responseJSON.message);
    });

    $('#weatherReport').show();
  });
});
