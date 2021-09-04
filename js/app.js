const apiKey = "8766f0a51c4a3e952a685fc490a3b76c";
const spinner = document.getElementById("spinner");
const searchResult = document.getElementById("search-result");
const errorMessage = document.getElementById("error-message");
spinner.style.display = "none";
const button = document.getElementById("button-addon2");

button.addEventListener("click", () => {
  const city = document.getElementById("city-name");
  errorMessage.innerText = "";
  if (city.value === "") {
    document.getElementById("error-message").innerText =
      "Search field is empty!";
    searchResult.innerHTML = "";
  } else {
    searchTemperature(city.value);
    city.value = "";
  }
});

const searchTemperature = (city) => {
  spinner.style.display = "block";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data))
    .catch(() => {
      // document.getElementById("city").innerText = "";
      // document.getElementById("error-message").innerText = "no city found!";
    });
};

const displayTemperature = (data) => {
  console.log(data);
  spinner.style.display = "none";
  const searchResult = document.getElementById("search-result");
  if (data.cod !== "404") {
    searchResult.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
      <h1>${data.name}</h1>
      <h3>${data.main.temp}&deg;c</h3>
      <h1>${data.weather[0].main}</h1>
    `;
    searchResult.appendChild(div);
  } else {
    document.getElementById("error-message").innerText = "No city found!";
    searchResult.innerHTML = "";
  }
};
