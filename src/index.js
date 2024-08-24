function displayTemperature(response) {
    const temperatureElement = document.querySelector("#current-temperature");
    const cityElement = document.querySelector("#current-city");
    const humidityElement = document.querySelector("#current-humidity");
    const windElement = document.querySelector("#current-wind");
  
    const temperature = Math.round(response.data.temperature.current);
    const humidity = response.data.temperature.humidity; // Make sure this matches the API response
    const windSpeed = response.data.wind.speed; // Make sure this matches the API response
  
    cityElement.textContent = response.data.city;
    temperatureElement.textContent = temperature;
    humidityElement.textContent = `${humidity}%`;
    windElement.textContent = `${windSpeed} km/h`;
  }
  
  function handleError(error) {
    console.error("Error fetching the weather data:", error);
    alert("Sorry, we couldn't find the city. Please try again.");
  }
  
  function search(event) {
    event.preventDefault();
    const searchInputElement = document.querySelector("#search-input");
    const city = searchInputElement.value.trim();
  
    if (city) {
      const apiKey = "0fd2f6d04c480da7a695db3eo9b870t6";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(displayTemperature).catch(handleError);
    } else {
      alert("Please enter a city name.");
    }
  }
  
  function formatDate(date) {
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const formattedDay = days[date.getDay()];
  
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  const searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  const currentDateElement = document.querySelector("#current-date");
  const currentDate = new Date();
  
  currentDateElement.textContent = formatDate(currentDate);
  