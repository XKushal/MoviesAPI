//EXAMPLE OF REQUEST TO GOOGLE 
// var request = require('request');
// request('http://www.google.com', function(error, response, body) {
//     if(error){
//         console.log("SOMETHING WENT WRONG.");
//         console(error);
//     }else{
//         if(response.statusCode == 200){
//             console.log(body);
//         }
//     }
// });

//this is the shorter version
// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

//request to yahoo weather api to tell the sunset of hawaii or any place 
var request = require('request');

console.log("Sunset in Hawaii is at...")
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
    }
});