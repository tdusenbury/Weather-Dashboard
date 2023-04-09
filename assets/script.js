var currentTempEl = document.getElementById('temp');
var currentWindEl = document.getElementById('wind');
var currentHumidity = document.getElementById('humidity');
var date = dayjs().format('ddd, MMMM D YYYY  h:mm: a')

function getCurrentWeather(event) {
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=39528ad9ef6dff5e6f23805d2078c512"

$.ajax( {
    url: queryURL,
    method: "GET"

}).then(function(response) {
    console.log(queryURL);
    console.log(response);
    
    $("#city-container").html("<h2>Currently in " + response.name + date + "</h2>");
    $("#wind").html("<p>Wind Speed: " + response.wind.speed + "</p>");
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#temp").text("Temperature (F) " + response.main.temp);
} );





/*

var userFormEl = document.querySelector('#city-form'); //line 24
var cityInputEl = document.querySelector('#cityInput'); //line 26
var cityContainerEl = document.querySelector('#city-container'); //line 40
var citySearchTerm = document.querySelector('#city-search-term'); //line 39

var formCitySubmit = function (event) {
    event.preventDefault();
    
    var cityname = cityInputEl.value.trim();

    if (cityname) {
        getCityWeather (cityname);

        cityContainerEl.textContent = '';
        cityInputEl.value='';
    } else {
        alert ('Please enter a city name');
    }
};
var getCityWeather=function(user) {
    var apiURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=39528ad9ef6dff5e6f23805d2078c512'
    
    
    'http//api.openweathermap.org/data/2.5/weather?q=' + city + '&unites=imperial&appid=39528ad9ef6dff5e6f23805d2078c512'
}




userFormEl.addEventListener('submit', formSubmitHandler)