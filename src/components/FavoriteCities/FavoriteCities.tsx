import axios from 'axios';
import { CitiesProps } from 'interface/Interface';
import FavoriteCity from './FavoriteCity';

const FavoriteCities = (props: CitiesProps) => {
    const { weatherData, setWeatherData, setRenderPage } = props;

    const setCurrentCity = (event: React.MouseEvent<HTMLDivElement>) => {
        const city = (event.target as HTMLDivElement).textContent;

        if (weatherData?.location.name === city) return;

        axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=231b8f0b79954d95bc494854230905&q=${city}&days=7`)
            .then((response) => setWeatherData(response.data))
            .catch(() => setWeatherData(undefined));
    };

    const removeFavoriteCity = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        localStorage.removeItem(event.currentTarget.parentElement?.textContent || '');
        setRenderPage((prev) => !prev);
    };

    return (
        <div className="mt-5">
            <h2 className="text-left text-lg ps-1">Favorite cities</h2>

            <div className={`flex flex-wrap gap-2 ${localStorage.length ? 'mt-2' : ''}`}>
                {localStorage.length ? (
                    Object.keys(localStorage)
                        .sort()
                        .map((city) => <FavoriteCity key={city} {...{ city, setCurrentCity, removeFavoriteCity }} />)
                ) : (
                    <div className="py-1 ps-1 opacity-40 text-sm">No favorite cities</div>
                )}
            </div>
        </div>
    );
};

export default FavoriteCities;
