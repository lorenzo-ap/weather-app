import { useEffect, useState } from "react";
import { APIResponseInterface } from "interface/Interface";
import axios from "axios";
import Header from "components/Header/Header";
import CurrentWeather from "components/CurrentWeather/CurrentWeather";
import FavouriteCities from "components/FavouriteCities/FavouriteCities";
import TodayForecast from "components/forecast/today/TodayForecast";
import WeekForecast from "components/forecast/week/WeekForecast";

const App = () => {
  const [weatherData, setWeatherData] = useState<APIResponseInterface>();
  const [renderPage, setRenderPage] = useState(false);

  useEffect(() => {
    const showPosition = (position: GeolocationPosition) => {
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=736eace6f7bf4a3ba0c111443232304&q=${position.coords.latitude},${position.coords.longitude}&days=7`
        )
        .then((response) => {
          setWeatherData(response.data);
          !response.data.current.is_day && document.body.classList.add("dark");
        })
        .catch(() => setWeatherData(undefined));
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported.");
    }
  }, []);

  return (
    <div className="text-[#242c39] dark:text-[#dde0e5] py-5 px-5 xs:px-12 sm:px-24 md:px-5 shadow-2xl max-w-[52rem] w-full min-h-screen md:min-h-fit md:rounded-3xl md:w-auto bg-[#ecf0f1] dark:bg-[#0b131e] dark:bg-none">
      <Header {...{ weatherData, setWeatherData, setRenderPage }} />
      <main>
        {weatherData ? (
          <>
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="max-w-full md:max-w-sm">
                <CurrentWeather {...weatherData} />
                <TodayForecast forecastday={weatherData.forecast.forecastday} localtime={weatherData.location.localtime} />
              </div>
              <WeekForecast forecastday={weatherData.forecast.forecastday} localtime={weatherData.location.localtime} />
            </div>
            {<FavouriteCities {...{ setWeatherData, setRenderPage }} />}
          </>
        ) : (
          <div className="text-center">The city was not found</div>
        )}
      </main>
    </div>
  );
};

export default App;
