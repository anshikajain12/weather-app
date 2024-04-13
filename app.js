const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2];
if (!address) {
    console.log("Please provide an address")
} else {
    geocode(address, "EN", (error, data) => {
        if (error) {
            return console.log("error", error)
        }
        console.log("geocode,", data)
        forecast(data.latitude, data.longitude, (error, data) => {
            if (error) {
                return console.log("error", error)
            }
            console.log('forecast', data)

        })
    })
}
