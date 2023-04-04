import { FavouriteCitiesProps } from "interface/Interface";
import { RxCross2 } from "react-icons/rx";

const FavouriteCities = (props: FavouriteCitiesProps) => {
  const { setCity, clearLocalStorage, removeFavouriteCity } = props;

  return (
    <div className="mt-5">
      <div className="text-left text-lg ps-1">Favourite cities</div>
      <div className="flex my-3 mb-5 flex-wrap gap-2">
        {Object.keys(localStorage)
          .sort()
          .map((city) => {
            return (
              <div
                key={city}
                onClick={setCity}
                className="cursor-pointer bg-slate-800 hover:bg-slate-600 transition py-0.5 ps-3 pe-1 rounded-2xl text-center flex items-center gap-2.5">
                {city}
                <button onClick={removeFavouriteCity} className="bg-slate-400 hover:bg-slate-200 transition p-0.5 rounded-full" type="button">
                  <RxCross2 color="rgb(30 41 59)" />
                </button>
              </div>
            );
          })}
      </div>
      <button
        onClick={clearLocalStorage}
        className="cursor-pointer bg-slate-800 hover:bg-slate-600 transition py-1.5 rounded-2xl w-full text-center"
        type="button">
        Clear favourite list
      </button>
    </div>
  );
};

export default FavouriteCities;
