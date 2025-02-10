// OpenWeatherMap API Key (You need to sign up to get your free API key)
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data based on the city input
function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    // API URL for current weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found. Please try again.");
            } else {
                // Display weather information
                document.getElementById("city").textContent = `City: ${data.name}`;
                document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById("weather").textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching the weather data.");
        });
}
