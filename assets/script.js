let weatherInfo = [];
let buttonCityList=$("#city-list-container")

let findWeather=function(input) {
    let cityLocation="https://api.openweathermap.org/geo/1.0/direct?q=%22" + input + "%22&appid=39528ad9ef6dff5e6f23805d2078c512"
    fetch(cityLocation) 
        .then(function (latLon) {
            return latLon.json();
        }).then(function (data) {
            let lat = data[0].lat
            let lon = data[0].lon
            var location = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=39528ad9ef6dff5e6f23805d2078c512&units=imperial"
        fetch(location).then(function (targetWeather){
            return targetWeather.json()
    }) .then(function (weatherData) {
            $("#today-weather").show();
            $("#forecast-row").show();
            $("#city-today").text(weatherInfo + input + " " + moment().format("M/D/Y"))
            $("#weather-icon").attr("src", "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png")
            $("#today-weather").children().eq(1).text("Temperature: " + weatherData.temp)
            $("#today-weather").children().eq(2).text("Wind Speed (mph): " + weatherData.wind.speed)
            $("#today-weather").children().eq(3).text("Humidity: " + weatherData.main.humidity)
            for (x = 1; x < 6; x++)
                $("#" + x).children().eq(0).text(moment().add(x,"d").format("M/D/Y"))
                $("#" + x).children().eq(1).attr("src", "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png")
                $("#" + x).children().eq(2).text("Temperature: " + weatherData.temp)
                $("#" + x).children().eq(3).text("Wind Speed: " + weatherData.wind.speed)
                $("#" + x).children().eq(4).text("Humidity: " + weatherData.humidity)
                console.log(weatherData)
            })
        })
        }
    
    
$('#submitBtn').on("click" || "submit", function (event) {
    event.preventDefault();
    var cityName= $('#cityName').val();
    var cityString = JSON.parse(localStorage.getItem("cityString")) || [];
    if (!cityName) {
        alert ("Please enter a city name.")
    }else {
        var appendedButton = $(("<li></li>"))
        appendedButton.text(cityName)
        appendedButton.attr("id", cityName)
        appendedButton.addClass("weather btn btn-block")
        buttonCityList.append(appendedButton);
        cityString.push(cityName)
        localStorage.setItem("cityString", JSON.stringify(cityString));
        findWeather(cityName);
    }
});

$(".btn").on("click", function (event){
    let buttonSearch = $(event.target).attr("id")
    findWeather(buttonSearch)
})

var startPage = function () {
    $('#today-weather').hide()
    $('#forecast-row').hide()
    var cityString=JSON.parse(localStorage.getItem("cityString")) || [];
    cityString.forEach(function (city) {
        var appendedButton=$(("<li></li>"))
        appendedButton.text(city)
        appendedButton.attr("id", city)
        appendedButton.addClass("weather btn btn-block")
       buttonCityList.append(appendedButton)
    })
}
startPage();
