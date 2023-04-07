import { FavouriteCityProps } from "interface/Interface";
import { RxCross2 } from "react-icons/rx";

const FavouriteCity = (props: FavouriteCityProps) => {
  const { city, setCurrentCity, removeFavouriteCity } = props;

  return (
    <div
      onClick={setCurrentCity}
      className="cursor-pointer shadow-sm bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 py-0.5 ps-3 pe-1 rounded-2xl text-center flex items-center gap-2.5">
      {city}
      <button
        onClick={removeFavouriteCity}
        className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 p-0.5 rounded-full"
        type="button">
        <RxCross2 />
      </button>
    </div>
  );
};

export default FavouriteCity;
