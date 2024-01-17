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
//once posted the form will post the temperature

app.get("/", (req, res) => {
    res.redirect("/weather");
})


const weatherRouter = require("./routes/weather");

app.use("/weather", weatherRouter);

app.listen(3000);