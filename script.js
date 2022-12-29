let headerCity = document.querySelector(".my-4");
let boxes = document.querySelector(".row");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '079db720f8msh1cbc53903f31d09p1c8828jsn20766ddb5895',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        // console.log(response);
        // cityTemp.innerHTML = response.temp
        if(response.temp === undefined)
        {
            headerCity.classList.add("d-none");
            boxes.classList.add("d-none");
            alert("Enter a correct city");
        
            return;
        }
        cityname.innerHTML = city;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        cityWind.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
        headerCity.classList.remove("d-none");
        boxes.classList.remove("d-none");
        
    })
	// .catch(err => console.error(err));
    .catch(err => alert.error(err));
}

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
    
});
 

// Get weather for Mumbai
function getWeatherMumbai(){
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai' , options)
	.then(response => response.json())
	.then(response => {
        // console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp_m.innerHTML = response.temp;
        // feels_like.innerHTML = response.feels_like
        humidity_m.innerHTML = response.humidity
        mintemp_m.innerHTML = response.min_temp
        maxtemp_m.innerHTML = response.max_temp
        windspeed_m.innerHTML = response.wind_speed
        winddegree_m.innerHTML = response.wind_degrees
        // sunrise_m.innerHTML = response.sunrise
        // sunset_m.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}

function getWeatherDelhi(){
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' , options)
	.then(response => response.json())
	.then(response => {
        // console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp_d.innerHTML = response.temp;
        // feels_like.innerHTML = response.feels_like
        humidity_d.innerHTML = response.humidity
        mintemp_d.innerHTML = response.min_temp
        maxtemp_d.innerHTML = response.max_temp
        windspeed_d.innerHTML = response.wind_speed
        winddegree_d.innerHTML = response.wind_degrees
        // sunrise_d.innerHTML = response.sunrise
        // sunset_d.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}
function getWeatherNewYork(){
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York' , options)
	.then(response => response.json())
	.then(response => {
        // console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp_n.innerHTML = response.temp;
        // feels_like.innerHTML = response.feels_like
        humidity_n.innerHTML = response.humidity
        mintemp_n.innerHTML = response.min_temp
        maxtemp_n.innerHTML = response.max_temp
        windspeed_n.innerHTML = response.wind_speed
        winddegree_n.innerHTML = response.wind_degrees
        // sunrise_n.innerHTML = response.sunrise
        // sunset_n.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}
function getWeatherLondon(){
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London' , options)
	.then(response => response.json())
	.then(response => {
        // console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp_l.innerHTML = response.temp;
        // feels_like.innerHTML = response.feels_like
        humidity_l.innerHTML = response.humidity
        mintemp_l.innerHTML = response.min_temp
        maxtemp_l.innerHTML = response.max_temp
        windspeed_l.innerHTML = response.wind_speed
        winddegree_l.innerHTML = response.wind_degrees
        // sunrise_l.innerHTML = response.sunrise
        // sunset_l.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}
function getWeatherTokyo(){
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo' , options)
	.then(response => response.json())
	.then(response => {
        // console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp_t.innerHTML = response.temp;
        // feels_like.innerHTML = response.feels_like
        humidity_t.innerHTML = response.humidity
        mintemp_t.innerHTML = response.min_temp
        maxtemp_t.innerHTML = response.max_temp
        windspeed_t.innerHTML = response.wind_speed
        winddegree_t.innerHTML = response.wind_degrees
        // sunrise_t.innerHTML = response.sunrise
        // sunset_t.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}
function getWeatherDubai(){
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai' , options)
	.then(response => response.json())
	.then(response => {
        // console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp_du.innerHTML = response.temp;
        // feels_like.innerHTML = response.feels_like
        humidity_du.innerHTML = response.humidity
        mintemp_du.innerHTML = response.min_temp
        maxtemp_du.innerHTML = response.max_temp
        windspeed_du.innerHTML = response.wind_speed
        winddegree_du.innerHTML = response.wind_degrees
        // sunrise_du.innerHTML = response.sunrise
        // sunset_du.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}
getWeatherMumbai();
getWeatherDelhi();
getWeatherNewYork();
getWeatherLondon();
getWeatherTokyo();
getWeatherDubai();

// Dropdown click
// delhi.addEventListener("click",(e)=>{
//     console.log(e.target);
// })  

let allDropdownItem = document.querySelectorAll(".dropdown-item");
allDropdownItem.forEach(element => {
   // console.log(element.getAttribute("id"));
   element.addEventListener("click",(e)=>{
    // console.log(element.getAttribute("id"));
    let city = element.getAttribute("id");
    getWeather(city);
   })
});