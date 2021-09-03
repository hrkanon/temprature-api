const apiKey = "8766f0a51c4a3e952a685fc490a3b76c";
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  console.log(data);
  document.getElementById("city").innerText = `${data.name}`;
  document.getElementById("temp").innerText = `${data.main.temp}`;
  document.getElementById("condition").innerText = `${data.weather[0].main}`;
};
