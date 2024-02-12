import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";
export default function AddToFavourite() {
  const { favourites, addToFavorites, removeFavourites } =
    useContext(FavouriteContext);
  const [toggledFavourite, setToggledFavourite] = useState();
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData || {};
  function toggleFavourtie() {
    const matches = favourites?.find((fav) => fav.location === location);
    if (!matches) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFavourites(location);
    }
    setToggledFavourite((f) => !f);
  }
  useEffect(() => {
    const found = favourites?.find((fav) => fav.location === location);
    setToggledFavourite(found);
  }, [favourites, location]);
  return (
    <div className="flex items-center justify-end space-x-6">
      <button
        onClick={toggleFavourtie}
        className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
      >
        <span>Add to Favourite</span>
        <img src={toggledFavourite ? RedHeartIcon : HeartIcon} alt="" />
      </button>
    </div>
  );
}
