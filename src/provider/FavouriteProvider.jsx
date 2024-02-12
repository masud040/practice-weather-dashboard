import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  function addToFavorites(latitude, longitude, location) {
    setFavourites([
      ...favourites,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  }
  function removeFavourites(location) {
    const restFavourites = favourites?.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  }
  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavorites, removeFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
