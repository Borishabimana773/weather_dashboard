// Declaring all the ids into variables
var search = $("#search");
var searchBtn = $("#search-btn");
var message = $("#message");
var weatherCol = $("#weather-col");
var forecast = $("#forecast");
var forecastCol = $("#forecast-col");
var historyEl = $("#history");

//Declaring City History Object
var cityHistory = {};

// Open Weather api
var apiKey = "2c55cf825b3d6637f09bec8a5d37fed0";

// Page loading
$(document).ready(onLoad());

// Display Weather
var displayWeather = function (date) {
    var today = moment().format("MM/DD/YYYY");
    var uvi_index = data.uvi;
    var uvi_color = "";

    // set uvi color
  if (uvi_index <= 2) {
    uvi_color = "bg-success";
  } else if (uvi_index > 2 && uvi_index <= 5) {
    uvi_color = "bg-warning";
  } else {
    uvi_color = "bg-danger";
  }

  weatherCol.addClass("bg-white border border-dark p-3 rounded");
  var h2 = `<h2 class="fw-bold">${data.city} (${today}) <img class='weather-icon btn-history rounded-circle' 
  src='https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png' alt='' /></h2>`;
  var p = `<p>Temp: ${data.temp}ºF</p>
    <p>Wind: ${data.wind} MPH</p>
    <p>Humidity: ${data.humidity} %</p>
    <p>UV index: <span class="badge ${uvi_color} p-2">${uvi_index}</span></p>`;
  weatherCol.append(h2);
  weatherCol.appe

}