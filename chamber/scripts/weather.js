const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const apiKey = "27cbe7a68496379a3dade5a05086ca31";

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=-17.78&lon=-63.18&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=-17.78&lon=-63.18&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {
    try {
        const response =
            await fetch(currentWeatherURL);
        if (response.ok) {
            const data =
                await response.json();
            displayCurrentWeather(data);
        } else {
            throw new Error(
                await response.text()
            );
        }
    } catch (error) {
        console.error(error);
    }
}


function displayCurrentWeather(data) {
    currentTemp.textContent =
        `${Math.round(data.main.temp)}°C`;
    weatherDesc.textContent =
        data.weather[0].description;
    const iconSrc =
        `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute(
        "src",
        iconSrc
    );
    weatherIcon.setAttribute(
        "alt",
        data.weather[0].description
    );
}

async function getForecast() {
    try {
        const response =
            await fetch(forecastURL);
        if (response.ok) {
            const data =
                await response.json();
            displayForecast(data);
        } else {
            throw new Error(
                await response.text()
            );
        }
    } catch (error) {
        console.error(error);

    }
}


function displayForecast(data) {
    const todayTemp = Math.round(data.list[0].main.temp);

    const tomorrow = data.list[8];
    const dayAfterTomorrow = data.list[16];

    const tomorrowName = new Date(tomorrow.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
    const dayAfterName = new Date(dayAfterTomorrow.dt_txt).toLocaleDateString("en-US", { weekday: "long" });

    day1.textContent = `Today: ${todayTemp}°C`;
    day2.textContent = `${tomorrowName}: ${Math.round(tomorrow.main.temp)}°C`;
    day3.textContent = `${dayAfterName}: ${Math.round(dayAfterTomorrow.main.temp)}°C`;
}

getCurrentWeather();
getForecast();