const API_KEY = "cf62d0e4734c00a70982ab5800241f11";
const CITY = "Volgograd";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&lang=ru&appid=${API_KEY}`;

async function updateLocalWeather(): Promise<void> {
  const weatherElement = document.querySelector(".local-weather");
  if (!weatherElement) return;
  console.log(API_URL);
  

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Ошибка загрузки данных");

    const data = await response.json();
    weatherElement.textContent = `${Math.round(data.main.temp)}°C`;
  } catch (error) {
    console.error("Ошибка получения погоды:", error);
    weatherElement.textContent = "—°C";
  }
}

  updateLocalWeather();
