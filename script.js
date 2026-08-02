// ==============================
// PORTFOLIO JAVASCRIPT
// ==============================

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Musab's Portfolio 🚀");
});

// ==============================
// PROJECT CARD ANIMATION
// ==============================

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (cardPosition < screenPosition) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

// ==============================
// BUTTON CLICK
// ==============================

const button = document.querySelector(".btn");

if (button) {

    button.addEventListener("click", () => {

        console.log("Projects section opened");

    });

}

// ==============================
// FOOTER YEAR
// ==============================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

// ==============================
// WEATHER APP
// ==============================

const searchBtn = document.querySelector("#searchBtn");
const cityInput = document.querySelector("#city");
const weatherResult = document.querySelector("#weatherResult");

const apiKey = "e2393abe87032057f86e1fa0861b49f7";

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        console.log("Search button clicked");

        getWeather();

    });

}

async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {

        weatherResult.innerHTML = "<h2>Please enter a city.</h2>";
        return;

    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {

            weatherResult.innerHTML = "<h2>City not found.</h2>";
            return;

        }

        weatherResult.innerHTML = `
            <div class="weather-info">
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.weather[0].main}</h3>
                <h1>${data.main.temp}°C</h1>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            </div>
        `;

    } catch (error) {

        weatherResult.innerHTML = "<h2>Something went wrong.</h2>";
        console.log(error);

    }

}