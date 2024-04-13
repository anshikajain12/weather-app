const request = require('request')
// const geocode = (address, callback) => {
//     const url = `http://api.weatherapi.com/v1/current.json?key=6df8c0900ff34ab8b7014248241004&q=${encodeURIComponent(address)}&aqi=no`;
//     request({ url: url }, (error, response) => {
//         const data = JSON.parse(response.body)
//         if (error) {
//             callback("Unable to connect to weather Service!!", undefined)
//         } else if (data.location == {}) {
//             callback("unable to find the location", undefined);
//         } else {
//             callback(undefined, {
//                 temp_c: data.current.temp_c,
//                 temp_f: data.current.temp_f,
//                 longitude: data.location.lon,
//                 latitude: data.location.lat
//             });
//         }
//     })
// }
const geocode = (address, lan, callback) => {
    const options = {
        method: 'GET',
        url: `https://open-weather13.p.rapidapi.com/city/${address}/${lan}`,
        headers: {
            'X-RapidAPI-Key': 'a9c85d56c8msh4d97bdafb4ae5efp13f974jsn6197b9c1373c',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    request(options, (error, response, body) => {
        const data = JSON.parse(body);
        if (error) {
            callback("Unable to connect to weather Service!!", undefined)
        } else if (data.weather=={}) {
            callback("unable to find the weather Description", undefined);
        } else {
            callback(undefined, {
                address: data.name,
                longitude: data.coord.lon,
                latitude: data.coord.lat,
                weather: data.weather,
            });
        }
    });
}


module.exports = geocode;