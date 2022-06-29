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