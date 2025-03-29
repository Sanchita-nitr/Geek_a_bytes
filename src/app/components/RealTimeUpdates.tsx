"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiRain, WiSnow, WiCloudy } from "react-icons/wi";

export default function RealTimeUpdates() {
  const [weather, setWeather] = useState<{ condition: string; temperature: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("/api/weather"); // Replace with your actual API endpoint
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <WiDaySunny className="text-yellow-500 text-4xl" />;
      case "rainy":
        return <WiRain className="text-blue-500 text-4xl" />;
      case "snowy":
        return <WiSnow className="text-gray-500 text-4xl" />;
      default:
        return <WiCloudy className="text-gray-400 text-4xl" />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg text-center max-w-md mx-auto">
      <h2 className="text-3xl font-extrabold text-orange-600 mb-4">Live Weather Updates</h2>
      {loading ? (
        <p className="text-gray-600">Fetching latest weather...</p>
      ) : (
        weather && (
          <div className="flex flex-col items-center">
            {getWeatherIcon(weather.condition)}
            <p className="text-xl font-semibold mt-2">{weather.condition}</p>
            <p className="text-gray-700 text-lg">Temperature: {weather.temperature}°C</p>
            <p className="text-gray-600 text-sm mt-2">
              {weather.condition.toLowerCase() === "rainy"
                ? "We suggest indoor activities."
                : "Enjoy your day outside!"}
            </p>
          </div>
        )
      )}
    </div>
  );
}
