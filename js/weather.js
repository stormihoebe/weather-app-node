var apiKey = require('./../.env').apiKey;

function Weather(city){
  this.city = city;
}

Weather.prototype.getHumidity = function(displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayHumidity(response.main.humidity);
}).fail(function(error){
  return error.responseJSON.message;
});
};

Weather.prototype.getTemperature = function(displayTemperature) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayTemperature(response.main.temp);
}).fail(function(error){
  return error.responseJSON.message;
});
};

Weather.prototype.getPressure = function(displayPressure) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayPressure(response.main.pressure);
}).fail(function(error){
  return error.responseJSON.message;
});
};

Weather.prototype.getWindSpeed = function(displayWindSpeed) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayWindSpeed(response.wind.speed);
}).fail(function(error){
  return error.responseJSON.message;
});
};

Weather.prototype.getWindDeg = function(displayWindDirection) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayWindDirection(response.wind.deg);
}).fail(function(error){
  return error.responseJSON.message;
});
};

Weather.prototype.getClouds = function(displayClouds) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayClouds(response.clouds.all);
}).fail(function(error){
  return error.responseJSON.message;
});
};

Weather.prototype.getName = function(displayLocation) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayLocation(response.name);
}).fail(function(error){
  return error.responseJSON.message;
});
};

exports.weatherModule = Weather;
