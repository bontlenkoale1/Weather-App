function displayTemperature(response) {
    const temperatureElement = document.querySelector("#current-temperature");
    const cityElement = document.querySelector("#current-city");
    const temperature = Math.round(response.data.temperature.current);
  
    cityElement.textContent = response.data.city;
    temperatureElement.textContent = temperature;
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
      const apiKey = "b2a5adcct04b33178913oc335f405433";
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
  