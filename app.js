var http = require('http');
var fs = require('fs');
//var url = "https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";
const getWeather = require('current-weather-data');
const location = {
    lat: 57.123456,
    lon: 11.543212
}

var server = http.createServer((request, response) => {
    getWeather(location)
    .then(weather => {
        console.log(weather)
        response.write(`The temperature here is ${weather.temperature.value}`,"<br>");
        response.write(`The WindDirection here is ${weather.windDirection.name}`);
        response.write(`The Pressure here is ${weather.pressure.value}`);
        response.end()
    })
    
}).listen(5000);




 

