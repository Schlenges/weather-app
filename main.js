$(document).ready(function(){

	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position) {

		  var lat = position.coords.latitude;
		  var long = position.coords.longitude;		  
		  var api = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long;
		  
		  $.getJSON(api, function(data){

		  	var clear = {
		  		icon: 'wi wi-day-sunny',
		  		activity: 'a nice picnic',
		  		description: 'be perfect',
		  		weather: 'sunny'
		  	};

		  	var clouds = {
		  		icon: 'wi wi-day-cloudy',
		  		activity: 'going for a walk',
		  		description: 'be pleasant enough',
		  		weather: 'a little cloudy'
		  	};

		  	var rain = {
		  		icon: 'wi wi-showers',
		  		activity: 'watching a movie',
		  		description: 'put you in the right mood',
		  		weather: 'be rainy'
		  	};

		  	var thunder = {
		  		icon: 'wi wi-storm-showers',
		  		activity: 'bundling up with a good book',
		  		description: 'get a bit moody',
		  		weather: 'stormy'
		  	};

		  	var snow = {
		  		icon: 'wi wi-snow',
		  		activity: 'building a snowman',
		  		description: 'provide some material',
		  		weather: 'snowy'
		  	};
		  	

            // Checking Weather Condition

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

		  	function displayWeather(object){
	            document.getElementById('icon').className = object.icon;
	            document.getElementById('activity').innerHTML = object.activity;
	            document.getElementById('description').innerHTML = object.description;
	            document.getElementById('weather').innerHTML = object.weather;
         	};
 

 			// Converting Temperature

		    var tempC = Math.round(data.main.temp)+ '°C.';
		    var tempF = Math.round(data.main.temp * 9 / 5 + 32)+ '°F.';
		    document.getElementById('temp').innerHTML = tempC ;
		    
		    $("#temp").click(function(){
		      if($('#temp').text() == tempC){
		        $('#temp').text(tempF);
		      } else{
		        $('#temp').text(tempC);
		      };  
		    })
		    
		  }); // getJSON
		} // geolocation callback
	)} // geolocation
}) //document ready