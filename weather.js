const apiKey = '14dda88c9ebf8e5fa4c5fd7783200f32';
const citySelect = document.getElementById('citySelect');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityNameElement = document.getElementById('cityName');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('windSpeed');


getWeatherBtn.addEventListener('click', () => {
    const selectedCity = citySelect.value;
    if (selectedCity) {
        getWeather(selectedCity);
    } else {
        alert('Please select a city first.');
    }
});


async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data. Please try again.');
    }
}

// Function to display weather data
function displayWeather(data) {
    cityNameElement.textContent = data.name;
    temperatureElement.textContent = Math.round(data.main.temp);
    humidityElement.textContent = `${data.main.humidity}%`;
    windSpeedElement.textContent = `${data.wind.speed} km/h`;
}