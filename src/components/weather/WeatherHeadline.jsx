import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import PinIcon from "../../assets/pin.svg";
import RainyIcon from "../../assets/rainy.svg";
import SunnyIcon from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context";
import formatedDate from "../../utils/date_utils";
export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const {
    location,
    climate,
    temparature,
    maxTemparature,
    minTemparature,
    humidity,
    cloudPercentage,
    wind,
    time,
  } = weatherData || {};
  function getIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainyIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Haze":
        return HazeIcon;
      default:
        return SunnyIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temparature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-xl lg:text-2xl">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {formatedDate(time, "time", false)} -{" "}
        {formatedDate(time, "date", false)}
      </p>
    </div>
  );
}
