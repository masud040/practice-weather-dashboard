import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

export default function WeatherBoard() {
  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[200px] max-w-[700px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          <div className="md:col-span-2">
            <AddToFavourite />
          </div>
          <WeatherHeadline />
          <WeatherCondition />
        </div>
      </div>
    </div>
  );
}
