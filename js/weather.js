var apiKey = require('./../.env').apiKey;
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
function Weather(city){
  this.city = city;
}

Weather.prototype.getHumidity = function(displayHumidity) {
  $.get(weatherUrl + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayHumidity(response.main.humidity);
}).fail(function(error){
  displayHumidity(error.responseJSON.message);
});
};

Weather.prototype.getTemperatureF = function(displayTemperatureF) {
  $.get(weatherUrl + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayTemperatureF(response.main.temp);
}).fail(function(error){
  displayTemperatureF(error.responseJSON.message);
});
};

Weather.prototype.getTemperatureC = function(displayTemperatureC) {
  $.get(weatherUrl + this.city + '&units=metric&appid=' + apiKey).then(function(response) {
    displayTemperatureC(response.main.temp);
}).fail(function(error){
  displayTemperatureC(error.responseJSON.message);
});
};

Weather.prototype.getTemperatureK = function(displayTemperatureK) {
  $.get(weatherUrl + this.city + '&appid=' + apiKey).then(function(response) {
    displayTemperatureK(response.main.temp);
}).fail(function(error){
  displayTemperatureK(error.responseJSON.message);
});
};

Weather.prototype.getPressure = function(displayPressure) {
  $.get(weatherUrl + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayPressure(response.main.pressure);
}).fail(function(error){
  displayPressure(error.responseJSON.message);
});
};

Weather.prototype.getWindSpeed = function(displayWindSpeed) {
  $.get(weatherUrl + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayWindSpeed(response.wind.speed);
}).fail(function(error){
  displayWindSpeed(error.responseJSON.message);
});
};

Weather.prototype.getWindDeg = function(displayWindDirection) {
  $.get(weatherUrl + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayWindDirection(response.wind.deg);
}).fail(function(error){
  displayWindDirection(error.responseJSON.message);
});
};

Weather.prototype.getClouds = function(displayClouds) {
  $.get(weatherUrl + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayClouds(response.clouds.all);
}).fail(function(error){
  displayClouds(error.responseJSON.message);
});
};

Weather.prototype.getName = function(displayLocation) {
  $.get(weatherUrl + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayLocation(response.name);
}).fail(function(error){
  displayLocation(error.responseJSON.message);
});
};

exports.weatherModule = Weather;
