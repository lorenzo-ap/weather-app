import axios from 'axios';
import { CitiesProps } from 'interface/Interface';
import FavouriteCity from './FavouriteCity';

const FavouriteCities = (props: CitiesProps) => {
  const { setWeatherData, setRenderPage } = props;

  const setCurrentCity = (event: React.MouseEvent<HTMLDivElement>) => {
    const city = (event.target as HTMLDivElement).textContent;

    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=231b8f0b79954d95bc494854230905&q=${city}&days=7`)
      .then((response) => setWeatherData(response.data))
      .catch(() => setWeatherData(undefined));
  };

  const removeFavouriteCity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    localStorage.removeItem(event.currentTarget.parentElement?.textContent || '');
    setRenderPage((prev) => !prev);
  };

  const clearFavouriteCities = () => {
    localStorage.clear();
    setRenderPage((prev) => !prev);
  };

  return (
    <div className="mt-5">
      <h2 className="text-left text-lg ps-1">Favourite cities</h2>
      <div className="flex my-3 mb-5 flex-wrap gap-2">
        {localStorage.length ? (
          Object.keys(localStorage)
            .sort()
            .map((city) => <FavouriteCity key={city} {...{ city, setCurrentCity, removeFavouriteCity }} />)
        ) : (
          <div className="py-1 ps-1 opacity-40 text-sm">No favourite cities</div>
        )}
      </div>
      <button
        disabled={!localStorage.length}
        onClick={clearFavouriteCities}
        className="shadow-sm cursor-pointer disabled:opacity-50 dark:disabled:hover:bg-slate-800 disabled:cursor-no-drop bg-white hover:bg-slate-50 disabled:hover:bg-white dark:bg-slate-800 dark:hover:bg-slate-700 py-1.5 rounded-2xl w-full text-center"
        type="button">
        Clear favourites list
      </button>
    </div>
  );
};

export default FavouriteCities;
