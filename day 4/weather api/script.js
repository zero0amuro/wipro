// So if we want to implement a simple weather app that fetches weather data from a public API and displays it on the webpage, we can use the Fetch API along with async/await for better readability and error handling. 
// with the help of strucural Module pattern we can organize our code better. lets see the steps to achieve this.
// Step 1: Define the API endpoint and necessary DOM elements in seprate module named as weatherModule.js
// Step 2: Create functions to fetch weather data from the API and display it on the webpage in script.js
// Step 3: Use async/await to handle asynchronous operations and error handling in script.js
// Step 4: Add event listeners to trigger the fetch operation when the user interacts with the webpage in script.js
// Step 5: Test the application to ensure it works as expected after integrating it with the HTML file.
// Step 6: Finally we can style the weather app using CSS to make it visually appealing.

const apiKey = 'e2a5d7f1aaf28f0ecd25044d37fecac7'; // Replace with your OpenWeatherMap API key
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherResult.innerHTML = '<p>Please enter a city name.</p>';
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = <p>Error: ${error.message}</p>;
    });
});