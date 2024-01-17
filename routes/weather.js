const express = require("express");
const router = express.Router();
const app = express();
app.set('view engine', 'ejs');
const test = require("../api.js")


router.get("/", (req, res) => {
    res.render("./index");
});

router.post("/", async(req, res) => {


    console.log("Test")
    const weatherData = await test.Weather(req.body.city);

    console.log(weatherData)

    if(weatherData == "error") {
            res.status(500).send("Internal Server Error");
    } else {
        res.locals.city = req.body.city;
        res.render("./output", {w:weatherData});
    }
});


module.exports = router;