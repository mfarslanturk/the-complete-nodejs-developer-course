const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

function process1(callback){
    setTimeout(function () {
        console.log("Process1")
        callback();
    },3000)
}

function process2(){
    setTimeout(function () {
        console.log("Process2")
    },3000)
}

process1(process2);

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}