let weatherInfo = [];
let buttonCityList=$("#city-list-container")

/*fetch city to get longitude and latitude, then fetch again for specific weather forecast*/
let findWeather=function(input) {
    let cityLocation="https://api.openweathermap.org/geo/1.0/direct?q=%22" + input + "%22&appid=39528ad9ef6dff5e6f23805d2078c512"
    fetch(cityLocation) 
        .then(function (latLon) {
            return latLon.json();
        }).then(function (data) {
            let lat = data[0].lat
            let lon = data[0].lon
            var location = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=39528ad9ef6dff5e6f23805d2078c512&units=imperial"
        fetch(location).then(function (targetWeather){
            return targetWeather.json()
    }) 
/*Take that information and display today's weather*/
    .then(function (weatherData) {
        console.log(weatherData)
            $("#today-weather").show();
            $("#forecast-row").show();
            $("#city-today").text(input + " " + moment().format("M/D/Y")) 
            var img = $('<img id="icon">');
            img.attr("src","https://openweathermap.org/img/wn/" + weatherData.list[0].weather[0].icon + "@2x.png") 
            img.appendTo("#weather-icon");
            $("#today-weather").children().eq(1).text("Temperature: " + weatherData.list[0].main.temp) /*Today's Temperature*/
            $("#today-weather").children().eq(2).text("Wind Speed (mph): " + weatherData.list[0].wind.speed) /*Today's Wind*/
            $("#today-weather").children().eq(3).text("Humidity: " + weatherData.list[0].main.humidity) /*Today's Humidity*/
 /*Take that information and display five-days of weather*/

            for (x = 1; x < 6; x++) {
                $("#day-" + x).children().eq(0).text(moment().add(x,"d").format("M/D/Y"))
                $("#day-" + x).children().eq(1).attr("src", "https://openweathermap.org/img/wn/" + weatherData.list[8 * x - 1].weather[0].icon + "@2x.png")
                $("#day-" + x).children().eq(2).text("Temperature: " + weatherData.list[8 * x - 1].main.temp)
                $("#day-" + x).children().eq(3).text("Wind Speed (mph): " + weatherData.list[8 * x - 1].wind.speed) 
                $("#day-" + x).children().eq(4).text("Humidity: " + weatherData.list[8 * x - 1].main.humidity) 
            }
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
    event.preventDefault();
    let buttonSearch = $(event.target).attr("id")
    findWeather(buttonSearch)
})

var startPage = function () {
    $("#today-weather").hide()
    $("#forecast-row").hide()

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
