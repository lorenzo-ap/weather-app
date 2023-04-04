import { useEffect, useState } from "react";
import axios from "axios";
import { APIResponseInterface } from "interface/Interface";
import SearchCities from "components/SearchCities/SearchCities";
import WeatherData from "components/WeatherData/WeatherData";
import FavouriteCities from "components/FavouriteCities/FavouriteCities";
import Carousel from "components/forecast/today/TodayForecast";
import Days from "components/forecast/days/SevenDaysForeacst";

const App = () => {
  const [weatherData, setWeatherData] = useState<APIResponseInterface>();
  const [inputValue, setInputValue] = useState("");
  const [renderPage, setRenderPage] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported.");
    }

    function showPosition(position: GeolocationPosition) {
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=a35c4486065e4b6d966171930230304&q=${position.coords.latitude},${position.coords.longitude}&days=7`
        )
        .then((response) => setWeatherData(response.data));
    }
  }, []);

  const onAddToFavouriteButtonClick = () => {
    if (localStorage.getItem(weatherData?.location.name || "") !== null) {
      localStorage.removeItem(weatherData?.location.name || "");
    } else {
      localStorage.setItem(weatherData?.location.name || "", "true");
    }
    setRenderPage((prev) => !prev);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const searchCity = () => {
    inputValue !== "" &&
      axios
        .get(`https://api.weatherapi.com/v1/forecast.json?key=a35c4486065e4b6d966171930230304&q=${inputValue}&days=7`)
        .then((response) => setWeatherData(response.data))
        .catch(() => setWeatherData(undefined));
    setInputValue("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" && searchCity();
  };

  const setCity = (event: React.MouseEvent<HTMLButtonElement>) => {
    const city = (event.target as HTMLButtonElement).textContent;

    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=a35c4486065e4b6d966171930230304&q=${city}&days=7`)
      .then((response) => setWeatherData(response.data))
      .catch(() => setWeatherData(undefined));
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setRenderPage((prev) => !prev);
  };

  const removeFavouriteCity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    localStorage.removeItem(event.currentTarget.parentElement?.textContent || "");
    setRenderPage((prev) => !prev);
  };

  return (
    <div className="p-5 pt-5 shadow-2xl max-w-3xl w-full md:rounded-3xl md:w-auto bg-[#0b131e]">
      <SearchCities {...{ weatherData, onKeyDown, onInputChange, inputValue, onAddToFavouriteButtonClick, searchCity }} />
      {weatherData ? (
        <div>
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="max-w-full md:max-w-sm">
              <WeatherData {...weatherData} />
              <Carousel localTime={weatherData.location.localtime} days={weatherData.forecast.forecastday} />
            </div>
            <Days days={weatherData.forecast.forecastday} />
          </div>
          {Object.keys(localStorage).length !== 0 && <FavouriteCities {...{ setCity, clearLocalStorage, removeFavouriteCity }} />}
        </div>
      ) : (
        <div className="text-center">The city was not found</div>
      )}
    </div>
  );
};

export default App;
