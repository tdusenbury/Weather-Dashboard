# Weather-Dashboard

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript | [https://getbootstrap.com/docs/4.0/layout/grid/](https://getbootstrap.com/docs/4.0/layout/grid/);  

[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction);

 [https://www.w3schools.com/js/js_api_intro.asp](https://www.w3schools.com/js/js_api_intro.asp); 
 
 [https://www.w3schools.com/jquery/jquery_traversing.asp](https://www.w3schools.com/jquery/jquery_traversing.asp); 
 
 [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration); 

## Description 

This is a Weather Dashboard application. When the user opens the application, they are presented with an input box to choose a city. When the city is chosen, the city is added to the search history. When the user clicks on the city, the screen is populated with the city name, current date, the current weather conditions, including temperature, humidity, and wind speed. Additionally, a 5-day forecast is presented. For user ease, a weather icon is also present in both current and forecast boxes. If another city is chosen, that information is presented on the screen and the city is added to the list.


![Screenshot of My Site](images/Screen%20with%20cities.PNG)




[Visit the Deployed Site](https://tdusenbury.github.io/Weather-Dashboard/)


## Code Example

Even though we only used one API for this assignment, we had to write code to fetch the locations latitude and longitude and then put that into a second fetch. Then the information could be designated to the different areas of the application, today vs 5-day.

```
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
    })} )}
```


## Usage 

As expressed in the assignment, a traveler could use this application to see what to pack for each location for up to five days of a trip. I like using the app to see what the weather is like for friends and family all over the world.


## Learning Points 

This assignment allowed me to use new skills working with third-party APIs. It took more than a minute to figure out what to ask, or fetch, first; and then how to use that information for the second ask. Additionally, I had to figure out how to bring in the data for today, but also use a for loop to populate the 5-day forecast. 

I am getting better, but it is still a struggle to get everything to work together. I relied on the console.log to help me locate errors. Learning to pivot if something is not working is also becoming a "sooner rather than later" habit.

## Author Info


TAMARA "T" DUSENBURY
```
    I am excited to take my knowledge of various industries into the virtual realm.

* [Portfolio](https://youtu.be/bHX54GCrDB4)
* [LinkedIn](https://www.linkedin.com/in/tamara-dusenbury-02ab8591/)
* [Github](https://github.com/tdusenbury)
```
```


## Credits

Shout out to Laurie Fish for helping keep the ideas rolling and weird for more hours than we care to admit; to my tutor Katie; and to Liubov Sobolevskaya for making me think so very hard!!!


## License

MIT License

Copyright (c) 2023 tdusenbury

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
