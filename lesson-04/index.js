// None blocking io
// Write a logic that waits 3 seconds and console logs hello
// const fetch = require("node-fetch");


console.log("I am BEFORE timer, ")


// new Promise(function (resolved, rejected) {
//   setTimeout(function () {
//     console.log("Hello");
//     resolved();
//   }, 3000)
// }).then(function (){
//   console.log("I am AFTER timer, ");
// });
const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
const startTime = new Date().getTime();
fetch(API_URL).then(function (response){
  response.json().then(function (data) {
    console.log({ data })
    console.log({
      duration: new Date().getTime() - startTime,
    })
  })
})
console.log("After API call")