const apiKey = "8766f0a51c4a3e952a685fc490a3b76c";
const spinner = document.getElementById("spinner");
const searchResult = document.getElementById("search-result");
spinner.style.display = "none";
const button = document.getElementById("button-addon2");

button.addEventListener("click", () => {
  const city = document.getElementById("city-name");
  searchTemperature(city.value);
});

const searchTemperature = (city) => {
  spinner.style.display = "block";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data, city));
};
searchTemperature("dhaka");

const displayTemperature = (data, city) => {
  spinner.style.display = "none";
  if (data.cod === "404") {
    document.getElementById("error-message").innerText = `${data.message}!`;
    searchResult.innerHTML = "";
  } else if (city === "") {
    document.getElementById("error-message").innerText = `Please enter a city!`;
    searchResult.innerHTML = "";
  } else {
    document.getElementById("city").innerText = `${data.name}`;
    document.getElementById("temp").innerText = `${data.main.temp}`;
    document.getElementById("condition").innerText = `${data.weather[0].main}`;
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", url);
  }
};
