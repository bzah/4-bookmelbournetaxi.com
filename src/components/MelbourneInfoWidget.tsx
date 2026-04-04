import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, CloudSun, CloudSnow, CloudLightning, CloudDrizzle, Thermometer, Wind, Clock, Calendar, Loader2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const MELBOURNE_LAT = -37.8136;
const MELBOURNE_LON = 144.9631;

type WeatherData = {
  current: {
    temperature: number;
    windspeed: number;
    weathercode: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
};

const WMO_DESCRIPTIONS: Record<number, string> = {
  0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
  45: "Foggy", 48: "Rime Fog", 51: "Light Drizzle", 53: "Drizzle", 55: "Heavy Drizzle",
  61: "Light Rain", 63: "Rain", 65: "Heavy Rain", 66: "Freezing Rain", 67: "Heavy Freezing Rain",
  71: "Light Snow", 73: "Snow", 75: "Heavy Snow", 77: "Snow Grains",
  80: "Light Showers", 81: "Showers", 82: "Heavy Showers",
  85: "Light Snow Showers", 86: "Heavy Snow Showers",
  95: "Thunderstorm", 96: "Thunderstorm w/ Hail", 99: "Thunderstorm w/ Heavy Hail",
};

function getWeatherIcon(code: number): LucideIcon {
  if (code <= 1) return Sun;
  if (code <= 3) return CloudSun;
  if (code <= 48) return Cloud;
  if (code <= 57) return CloudDrizzle;
  if (code <= 67) return CloudRain;
  if (code <= 77) return CloudSnow;
  if (code <= 82) return CloudRain;
  if (code <= 86) return CloudSnow;
  return CloudLightning;
}

function getDayLabel(dateStr: string, index: number): string {
  if (index === 0) return "Today";
  if (index === 1) return "Tomorrow";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-AU", { weekday: "short" });
}

const MelbourneInfoWidget = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${MELBOURNE_LAT}&longitude=${MELBOURNE_LON}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Australia%2FMelbourne&forecast_days=7`
        );
        const data = await res.json();
        setWeather({
          current: {
            temperature: Math.round(data.current_weather.temperature),
            windspeed: Math.round(data.current_weather.windspeed),
            weathercode: data.current_weather.weathercode,
          },
          daily: data.daily,
        });
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  const melbourneTime = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(time);

  const melbourneDate = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(time);

  const CurrentIcon = weather ? getWeatherIcon(weather.current.weathercode) : CloudSun;
  const currentDesc = weather ? (WMO_DESCRIPTIONS[weather.current.weathercode] ?? "Unknown") : "Loading...";

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-4">
          Melbourne Right Now
        </h2>
        <p className="text-lg font-body text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Live conditions in Melbourne, Victoria, Australia
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Current Time */}
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wide">Current Time</span>
            </div>
            <p className="text-3xl font-heading font-bold text-foreground">{melbourneTime}</p>
            <p className="text-sm font-body text-muted-foreground mt-1">AEST</p>
          </div>

          {/* Date */}
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wide">Today's Date</span>
            </div>
            <p className="text-xl font-heading font-bold text-foreground">{melbourneDate}</p>
          </div>

          {/* Current Weather */}
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CurrentIcon className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wide">Melbourne Weather</span>
            </div>
            {loading ? (
              <Loader2 className="w-8 h-8 mx-auto text-primary animate-spin" />
            ) : (
              <>
                <p className="text-4xl font-heading font-bold text-foreground">
                  {weather?.current.temperature ?? "--"}°C
                </p>
                <p className="text-sm font-body text-muted-foreground mt-1">{currentDesc}</p>
              </>
            )}
          </div>

          {/* Today's Range */}
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Thermometer className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wide">Today's Range</span>
            </div>
            {loading ? (
              <Loader2 className="w-8 h-8 mx-auto text-primary animate-spin" />
            ) : (
              <>
                <p className="text-2xl font-heading font-bold text-foreground">
                  {Math.round(weather?.daily.temperature_2m_max[0] ?? 0)}° / {Math.round(weather?.daily.temperature_2m_min[0] ?? 0)}°
                </p>
                <p className="text-sm font-body text-muted-foreground mt-1 flex items-center justify-center gap-1">
                  <Wind className="w-3 h-3" /> Wind: {weather?.current.windspeed ?? "--"} km/h
                </p>
              </>
            )}
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="font-heading font-semibold text-foreground mb-4 text-center">7-Day Forecast (Melbourne)</h3>
          {loading ? (
            <div className="flex justify-center py-6">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-2">
              {weather?.daily.time.map((dateStr, i) => {
                const DayIcon = getWeatherIcon(weather.daily.weathercode[i]);
                return (
                  <div key={dateStr} className="text-center py-3">
                    <p className="text-xs font-body font-medium text-muted-foreground mb-2">
                      {getDayLabel(dateStr, i)}
                    </p>
                    <DayIcon className="w-6 h-6 mx-auto text-primary mb-2" />
                    <p className="text-sm font-body font-semibold text-foreground">
                      {Math.round(weather.daily.temperature_2m_max[i])}°
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      {Math.round(weather.daily.temperature_2m_min[i])}°
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MelbourneInfoWidget;
