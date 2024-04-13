const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const options = {
        method: 'GET',
        url: `https://open-weather13.p.rapidapi.com/city/latlon/${latitude}/${longitude}`,
        headers: {
            'X-RapidAPI-Key': 'a9c85d56c8msh4d97bdafb4ae5efp13f974jsn6197b9c1373c',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    request(options, (error, response, body) => {
        const data = JSON.parse(body);
        if (error) {
            callback("Unable to connect to weather Service!!", undefined)
        } else if (data.weather == {}) {
            callback("unable to find the weather Description", undefined);
        } else {
            callback(undefined, {
                tempertaure: data.main.temp,
                feelsLike: data.main.feels_like,
                humidity: data.main.humidity,
            });
        }
    });


}

module.exports = forecast;