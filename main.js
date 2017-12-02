// Check Geolocation
$(document).ready(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;		  
            var api = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long;

            checkWeather(api);
        });

    } else {
        document.getElementById('greeting').innerHTML = "Sorry, your browser doesn't seem to support geolocation :(";		
    };
});


// Check Weather
function checkWeather(api){
    // jQuery AJAX Request
    $.getJSON(api, function(data){

        // Check Weather Condition
        switch(data.weather[0].main){
            case "Clear":
                displayWeather(clear);
                break;
            case "Clouds":
                displayWeather(clouds);
                break;
            case "Rain":
            case "Drizzle":
                displayWeather(rain);
                break;
            case "Thunderstorm":
                displayWeather(thunder);
                break;
            case "Fog":
            case "Mist":
                displayWeather(fog);
                break;
            case "Snow":
                displayWeather(snow);
        };

        displayTemp(data);
    });
};

// Display Weather
function displayWeather(object){
    document.getElementById('icon').className = object.icon;
    document.getElementById('activity').innerHTML = object.activity;
    document.getElementById('description').innerHTML = object.description;
    document.getElementById('weather').innerHTML = object.weather;
};

// Convert And Display Temperature
function displayTemp(data){
    var tempC = Math.round(data.main.temp)+ '°C.';
    var tempF = Math.round(data.main.temp * 9 / 5 + 32)+ '°F.';
    document.getElementById('temp').innerHTML = tempC ;

    // Switch Celsius And Fahrenheit
    $("#temp").click(function(){
        if($('#temp').text() == tempC){
            $('#temp').text(tempF);
        } else{
            $('#temp').text(tempC);
        };
    });
};

// Description Objects
var clear = {
        icon: 'wi wi-day-sunny',
        activity: 'a nice picnic',
        description: 'be perfect',
        weather: 'sunny'
    },

    clouds = {
        icon: 'wi wi-day-cloudy',
        activity: 'going for a walk',
        description: 'be pleasant enough',
        weather: 'a little cloudy'
    },

    rain = {
        icon: 'wi wi-showers',
        activity: 'watching a movie',
        description: 'put you in the right mood',
        weather: 'be rainy'
    },

    thunder = {
        icon: 'wi wi-storm-showers',
        activity: 'bundling up with a good book',
        description: 'get a bit moody',
        weather: 'stormy'
    },

    fog = {
        icon: 'wi wi-fog',
        activity: 'staying inside and learning a new skill',
        description: 'get a little gloomy',
        weather: 'foggy'
    },

    snow = {
        icon: 'wi wi-snow',
        activity: 'building a snowman',
        description: 'provide some material',
        weather: 'snowy'
    };
