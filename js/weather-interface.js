var Weather = require('./../js/weather.js').weatherModule;
var displayHumidity = function(humidityData) {
  $('#humidity').text(humidityData + "%");
};
var displayTemperature = function(temperatureData) {
  $('#temperature').text(temperatureData + " F");
};
var displayPressure = function(pressureData) {
  $('#pressure').text(pressureData + " hPa");
};
var displayWindSpeed = function(windSpeedData) {
  $('#windSpeed').text(windSpeedData + " miles/sec");
};
var displayWindDirection = function(windDirectionData) {
  $('#windDirection').text(windDirectionData + " degrees");
};
var displayClouds = function(cloudsData) {
  $('#clouds').text(cloudsData + "%");
};
var displayLocation = function(locationData) {
  $('#locationName').text(locationData);
};
$(function() {
$('#weatherReport').hide();
  $('#form').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    var newReport = new Weather(location);
    newReport.getHumidity(displayHumidity);
    newReport.getTemperature(displayTemperature);

    newReport.getPressure(displayPressure);

    newReport.getWindSpeed(displayWindSpeed);

    newReport.getWindDeg(displayWindDirection);

    newReport.getClouds(displayClouds);

    newReport.getName(displayLocation);

      // $('#temperature').text(newReport.getTemperature() + " F");
      // $('#pressure').text(newReport.getPressure() + " hPa");
      // $('#windSpeed').text(newReport.getWindSpeed() + " miles/sec");
      // $('#windDirection').text(newReport.getWindDeg + " degrees");
      // $('#clouds').text(newReport.getClouds() + "%");
      // $('#locationName').text(newReport.getName());

    $('#weatherReport').show();
  });
});
