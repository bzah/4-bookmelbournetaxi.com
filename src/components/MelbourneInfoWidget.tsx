import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, CloudSun, Thermometer, Wind, Clock, Calendar } from "lucide-react";

const MelbourneInfoWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
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

  const forecast = [
    { day: "Today", icon: CloudSun, high: 18, low: 11 },
    { day: "Tomorrow", icon: Sun, high: 21, low: 12 },
    { day: "Wed", icon: Cloud, high: 17, low: 10 },
    { day: "Thu", icon: CloudRain, high: 15, low: 9 },
    { day: "Fri", icon: Sun, high: 20, low: 11 },
    { day: "Sat", icon: CloudSun, high: 19, low: 12 },
    { day: "Sun", icon: Cloud, high: 16, low: 10 },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-4">
          Melbourne Right Now
        </h2>
        <p className="text-lg font-body text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Current conditions in Melbourne, Victoria, Australia
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
              <CloudSun className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wide">Melbourne Weather</span>
            </div>
            <p className="text-4xl font-heading font-bold text-foreground">18°C</p>
            <p className="text-sm font-body text-muted-foreground mt-1">Partly Cloudy</p>
          </div>

          {/* Today's Range */}
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Thermometer className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wide">Today's Range</span>
            </div>
            <p className="text-2xl font-heading font-bold text-foreground">21° / 11°</p>
            <p className="text-sm font-body text-muted-foreground mt-1 flex items-center justify-center gap-1">
              <Wind className="w-3 h-3" /> Wind: 15 km/h
            </p>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="font-heading font-semibold text-foreground mb-4 text-center">7-Day Forecast (Melbourne)</h3>
          <div className="grid grid-cols-7 gap-2">
            {forecast.map((day) => (
              <div key={day.day} className="text-center py-3">
                <p className="text-xs font-body font-medium text-muted-foreground mb-2">{day.day}</p>
                <day.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                <p className="text-sm font-body font-semibold text-foreground">{day.high}°</p>
                <p className="text-xs font-body text-muted-foreground">{day.low}°</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MelbourneInfoWidget;
