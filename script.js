async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '23da78cc5a29fc1267bc86b249b3bd82';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Current Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°F</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
