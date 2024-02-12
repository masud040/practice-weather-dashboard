import { useContext, useEffect, useState } from "react";
import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudImage from "../assets/backgrounds/few-clouds.jpg";
import MistiImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatteredCloudImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/snow.jpg";
import SunnyImage from "../assets/backgrounds/sunny.jpg";
import ThunderStromImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";
import Header from "../components/header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";
import { WeatherContext } from "../context";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroudImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatteredCloudImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStromImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudImage;
      case "Misti":
        return MistiImage;

      default:
        return SunnyImage;
    }
  }
  useEffect(() => {
    setClimateImage(getBackgroudImage(weatherData.climate));
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex items-center justify-center w-98 h-screen">
          {" "}
          <p className="text-xl bg-gray-400/30 p-3">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
