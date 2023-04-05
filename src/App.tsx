import { useEffect, useState } from "react";
import { APIResponseInterface } from "interface/Interface";
import axios from "axios";
import SearchCity from "components/SearchCity/SearchCity";
import CurrentWeather from "components/CurrentWeather/CurrentWeather";
import FavouriteCities from "components/FavouriteCities/FavouriteCities";
import TodayForecast from "components/forecast/today/TodayForecast";
import SevenDaysForecast from "components/forecast/days/SevenDaysForeacst";

const App = () => {
  const [weatherData, setWeatherData] = useState<APIResponseInterface>();
  const [renderPage, setRenderPage] = useState(false);

  useEffect(() => {
    const showPosition = (position: GeolocationPosition) => {
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=a35c4486065e4b6d966171930230304&q=${position.coords.latitude},${position.coords.longitude}&days=7`
        )
        .then((response) => setWeatherData(response.data))
        .catch(() => setWeatherData(undefined));
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported.");
    }
  }, []);

  return (
    <div className="p-5 pt-5 shadow-2xl max-w-3xl w-full md:rounded-3xl md:w-auto bg-[#0b131e]">
      <SearchCity {...{ weatherData, setWeatherData, setRenderPage }} />
      {weatherData ? (
        <main>
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="max-w-full md:max-w-sm">
              <CurrentWeather {...weatherData} />
              <TodayForecast localTime={weatherData.location.localtime} days={weatherData.forecast.forecastday} />
            </div>
            <SevenDaysForecast days={weatherData.forecast.forecastday} />
          </div>
          {Object.keys(localStorage).length !== 0 && <FavouriteCities {...{ setWeatherData, setRenderPage }} />}
        </main>
      ) : (
        <div className="text-center">The city was not found</div>
      )}
    </div>
  );
};

export default App;
