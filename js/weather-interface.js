var Weather = require('./../js/weather.js').weatherModule;
var displayHumidity = function(humidityData) {
  $('#humidity').text(humidityData + "%");
};
var displayTemperatureF = function(temperatureData) {
  $('#temperature').text(temperatureData + " F");
};
var displayTemperatureC = function(temperatureData) {
  $('#temperature').text(temperatureData + " C");
};
var displayTemperatureK = function(temperatureData) {
  $('#temperature').text(temperatureData + " K");
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
    newReport.getTemperatureF(displayTemperatureF);
    newReport.getPressure(displayPressure);
    newReport.getWindSpeed(displayWindSpeed);
    newReport.getWindDeg(displayWindDirection);
    newReport.getClouds(displayClouds);
    newReport.getName(displayLocation);
    $('#weatherReport').show();

    $('#celcius').click(function(){
      newReport.getTemperatureC(displayTemperatureC);
      $('#celcius').addClass("activeBtn");
      $('#kalvin').removeClass("activeBtn");
      $('#fahrenheit').removeClass("activeBtn");
    });
    $('#fahrenheit').click(function(){
      newReport.getTemperatureF(displayTemperatureF);
      $('#fahrenheit').addClass("activeBtn");
      $('#kalvin').removeClass("activeBtn");
      $('#celcius').removeClass("activeBtn");
    });
    $('#kalvin').click(function(){
      newReport.getTemperatureK(displayTemperatureK);
      $('#kalvin').addClass("activeBtn");
      $('#celcius').removeClass("activeBtn");
      $('#fahrenheit').removeClass("activeBtn");
    });
  });


});
