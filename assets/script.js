var weatherInfo = [];
var buttonCityList=("$#city-list-container")

var findWeather=function(input) {
    var cityLocation="https://api.openweathermap.org/geo/1.0/direct?q=%22" + input + "%22&appid=39528ad9ef6dff5e6f23805d2078c512"
    fetch(cityLocation) 
        .then(function (latLon) {
            return latLon.json();
        })

        .then(function (data) {
           
            var latitude = data[0].lat
            var longitude = data[0].lon
            var location = "https://api.openweathermap.org/data/2.5/forecast?lat="
            + lat + "&lon=" + lon + "appid=39528ad9ef6dff5e6f23805d2078c512&units=imperial"
            fetch(location).then(function (targetWeather){
                return targetWeather.json()
            })

        .then(function (weatherInfo) {
            $('#today-weather').show();
            $('#forecast-row').show();
            $('#city-today').text(weatherInfo.city.name + "" + dayjs().format("M/d/y"))
            $('#weather-icon').attr("src", "https://openweathermap.org/img/wn/" + weatherInfo.list[0].weather[0].icon + "@2x.png")
            $('#today-weather').children().eq(1).text("Temperature: " + weatherInfo.list[0].main.temp)
            $('#today-weather').children().eq(2).text("Wind Speed: " + weatherInfo.list[0].wind.speed)
            $('#today-weather').children().eq(3).text("Humidity: " + weatherInfo.list[0].main.humidity)

            for (x=1; x<6; x++)
                $("#" + x).children().eq(0).text(dayjs().format("M/d/y"))
                $("#" + x).children().eq(1).attr("src", "https://openweathermap.org/img/wn/" + weatherInfo.list[0].weather[0].icon + "@2x.png")
                $("#" + x).children().eq(2).text("Temperature: " + weatherInfo.list[8*x-1].main.temp)
                $("#" + x).children().eq(3).text("Wind Speed: " + weatherInfo.list[8*x-1].wind.speed)
                $("#" + x).children().eq(4).text("Humidity: " + weatherInfo.list[8*x-1].main.humidity)
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

var startPage = function () {
    $('#today-weather').hide()
    $('#forecast-row').hide()
    var cityString=JSON.parse(localStorage.getItem("cityString")) || [];
    cityString.forEach(function (city) {
        var appendedButton=$(("<li></li>"))
        appendedButton.text(city)
        appendedButton.attr("id", city)
        appendedButton.addClass("weather btn btn-block")
        buttonCityList.append(appendButton)
    })
}

startPage();


$(".btn").on("click", function (event){
    let buttonSearch = $(event.target).attr("id")
    findWeather(buttonSearch)
})