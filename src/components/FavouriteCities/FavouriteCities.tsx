import axios from "axios";
import { CitiesProps } from "interface/Interface";
import { RxCross2 } from "react-icons/rx";

const FavouriteCities = (props: CitiesProps) => {
  const { setWeatherData, setRenderPage } = props;

  const setFavouriteCity = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const city = (event.target as HTMLDivElement).textContent;

    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=a35c4486065e4b6d966171930230304&q=${city}&days=7`)
      .then((response) => setWeatherData(response.data))
      .catch(() => setWeatherData(undefined));
  };

  const removeFavouriteCity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    localStorage.removeItem(event.currentTarget.parentElement?.textContent || "");
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
        {!Object.keys(localStorage).length && <div className="py-1 ps-1 opacity-30 text-sm">No favourite cities</div>}
        {Object.keys(localStorage)
          .sort()
          .map((city) => (
            <div
              key={city}
              onClick={setFavouriteCity}
              className="cursor-pointer shadow-sm bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 py-0.5 ps-3 pe-1 rounded-2xl text-center flex items-center gap-2.5">
              {city}
              <button
                onClick={removeFavouriteCity}
                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 p-0.5 rounded-full"
                type="button">
                <RxCross2 />
              </button>
            </div>
          ))}
      </div>
      <button
        disabled={!Object.keys(localStorage).length}
        onClick={clearFavouriteCities}
        className="shadow-sm cursor-pointer disabled:opacity-50 dark:disabled:hover:bg-slate-800 disabled:cursor-no-drop bg-white hover:bg-slate-50 disabled:hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 py-1.5 rounded-2xl w-full text-center"
        type="button">
        Clear favourites list
      </button>
    </div>
  );
};

export default FavouriteCities;
