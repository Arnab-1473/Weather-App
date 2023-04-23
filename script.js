const apiKey = "8898424ac09393eb94dbab93c5d4f85d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchItem = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "images/clear.png";
    } 
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchItem.value);
});
// checkWeather();