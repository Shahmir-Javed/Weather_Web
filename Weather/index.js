const input = document.querySelector(".input-Box");
const searchBtn = document.querySelector("#searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const decription = document.querySelector(".dicription");
const humidity = document.querySelector(".humidity-text");
const wind = document.querySelector(".wind-speed");
const location_notFound = document.querySelector(".location_notFound");
const weather_body = document.querySelector(".weather-body");

async function cheackWeather(city) {
  const api_key = "f22c7a427e2709589f04d069ef86ba10";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  console.log(weather_data);

  if(weather_data.cod == "404"){
    location_notFound.style.display = "flex";
    weather_body.style.display = "none";
  }else{
     weather_body.style.display = "flex";
     location_notFound.style.display = "none";
  }
 
  // temperature
  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  // temperature Decription
  decription.innerHTML = `${weather_data.weather[0].description}`;
  // Humidity
  humidity.innerHTML = `${weather_data.main.humidity}%`;

  //  Wind Speed
  wind.innerHTML = `${weather_data.wind.speed}km/h`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weatherImg.src = "image/cloud.png";
      break;

    case "Rain":
      weatherImg.src = "image/rain.png";
      break;

    case "Clear":
      weatherImg.src = "image/clear.png";
      break;

    case "Mist":
      weatherImg.src = "image/mist.png";
      break;

    case "Snow":
      weatherImg.src = "image/snow.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  cheackWeather(input.value);
});
