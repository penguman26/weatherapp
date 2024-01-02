const express = require("express");
const app = express();
const path = require("path");
const https = require("https");
const bodyParser = require('body-parser');
const { OpenWeatherAPI } = require("openweather-api-node")
const apiKey = "debafaaa11cf371f4207f97ff9a9c48e"
app.set('view engine', 'ejs');

app.use(express.static("public"));
//app.use(bodyParser.urlencoded)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//index page is a form that will get the weather 
app.get("/", (req, res) => {
    res.render("index");
});

//once posted the form will post the temperature
app.post("/", async (req, res) => {
    try {
        let weather = new OpenWeatherAPI({
            key: apiKey,
            locationName: req.body.city,
            units: "metric"
        });

        const weatherData = await weather.getCurrent();
        console.log("Weather Data:", weatherData); // Log the weather data
        
        res.locals.city = req.body.city;

        await res.render("output", {w:weatherData});
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(3000);