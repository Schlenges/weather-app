$(document).ready(function(){
	// Check Geolocation
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;		  
			var api = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long;

			checkWeather(api);
		});
	} else {
		var paragraph = document.createElement("P");
	var text = document.createTextNode("Sorry, your browser doesn't support geolocation :(");
	paragraph.appendChild(text);
	document.body.appendChild(paragraph);  		
	};
});

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

	snow = {
		icon: 'wi wi-snow',
		activity: 'building a snowman',
		description: 'provide some material',
		weather: 'snowy'
	};
	

function checkWeather(api){
	// jQuery AJAX Request
	$.getJSON(api, function(data){

		// Check Weather Condition
		if(data.weather[0].main == "Clear"){
			displayWeather(clear);
		};
	    if(data.weather[0].main == "Clouds"){
	      	displayWeather(clouds);
	    };
	    if(data.weather[0].main == "Rain" || data.weather[0].main == "Drizzle"){
	      	displayWeather(rain);
	    };
	    if(data.weather[0].main == "Thunderstorm" || data.weather[0].main == "Fog"){
	      	displayWeather(thunder);
	    };
	    if(data.weather[0].main == "Snow"){
	      	displayWeather(snow);
		};

	    displayTemp(data);
	});
};

function displayWeather(object){
	document.getElementById('icon').className = object.icon;
	document.getElementById('activity').innerHTML = object.activity;
	document.getElementById('description').innerHTML = object.description;
	document.getElementById('weather').innerHTML = object.weather;
};

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
