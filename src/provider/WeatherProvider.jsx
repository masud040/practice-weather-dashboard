import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";

export default function WeatherProvider({ children }) {
  const { weatherData, error, loading } = useWeather();

  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
}
