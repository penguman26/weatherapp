const { OpenWeatherAPI } = require("openweather-api-node")
const apiKey = "debafaaa11cf371f4207f97ff9a9c48e"

function Weather(test) {
    try {
        let weather = new OpenWeatherAPI({
            key: apiKey,
            locationName: test,
            units: "metric"
        });

        //weatherData = await weather.getCurrent();    
        //console.log("Weather Data:", weatherData); // Log the weather data
        return weather.getCurrent(); 
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return "error"
    }
}

module.exports = {Weather};