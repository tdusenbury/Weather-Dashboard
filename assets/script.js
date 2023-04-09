var cityNameEl

$('#submitBtn').on("click", "submit", function (event) {
    event.preventDefault();
    let cityName= $('#cityName').val();
    let buttonString = JSON.parse(localStorage.getItem("cityString")) || [];
    if (!cityName) {
        alert ("Please enter a city name.")
    }else {
        let appendedButton = $(("<li></li>"))
        appendedButton.text(cityName)
        appendedButton.attr("id", cityName)
        appendedButton.addClass("weather btn")
        buttonList.append(appendedButton);
        cityString.push(cityName)
        localStorage.setItem("cityString", JSON.stringify(cityString));
        findWeather(cityName);
    }
});






$(".btn").on("click", function (event){
    let buttonSearch = $(event.target).attr("id")
    findWeather(buttonSearch)
})





































/*var currentTempEl = document.getElementById('temp-today');
var currentWindEl = document.getElementById('wind-today');
var currentHumidity = document.getElementById('humidity-today');
var date = dayjs().format('dddd, MMMM D YYYY  h:mm: a')
var city="Seattle";
var cityEl = document.getElementById('cityName')

function getCurrentWeather(event) {
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=39528ad9ef6dff5e6f23805d2078c512"

$.ajax( {
    url: queryURL,
    method: "GET"

}).then(function(response) {
    console.log(queryURL);
    console.log(response);
    
    $("#city-today").html("<h2>Currently in " + response.name + date + "</h2>");
    $("#wind-today").html("<p>Wind Speed: " + response.wind.speed + "</p>");
    $("#humidity-today").text("Humidity: " + response.main.humidity);
    $("#temp-today").text("Temperature (F) " + response.main.temp);
} );

}
getCurrentWeather();


cityEl.addEventListener('submit', getCurrentWeather);*/

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




userFormEl.addEventListener('submit', formSubmitHandler) */