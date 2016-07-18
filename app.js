var https = require("https");
var APIKEY = process.env.FORECAST_KEY;
var lat = process.argv[2];
var lon = process.argv[3];

function weather(lat, lon) {
  try {
    var request = https.get("https://api.forecast.io/forecast/" + APIKEY + "/" + lat + "," + lon + ")", function(res) {
        var body = "";
        console.log("getting data");

        res.on("data", function(info) {
          body += info;
        });

        res.on("end", function() {
          if (res.statusCode === 200) {
            try { 
              var data = JSON.parse(body);
              console.log("here it comes");
              console.log(data);
            } catch(e) {
              console.log("fail");
              console.log(res.statusCode);
            }
          } else {
            console.error("There was an error: " + res.statusCode);
          }
      });
        
    });
  } catch(e) {
    console.error(res.statusCode);
  }
}

weather(lat,lon);