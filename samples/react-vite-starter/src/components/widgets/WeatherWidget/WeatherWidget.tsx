import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../../../utils/weatherApi';
import type { WeatherData } from '../../../types/weather';
import './WeatherWidget.css';

export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadWeather() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWeatherData();
        setWeatherData(data);
      } catch (err) {
        setError('Failed to load weather data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, []);

  if (loading) {
    return (
      <div className="weather-widget">
        <div className="widget-loading">Loading weather...</div>
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className="weather-widget">
        <div className="widget-error">Unable to load weather data</div>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <h2 className="widget-title">Weather</h2>
      <div className="weather-content">
        <div className="weather-icon">
          {weatherData.icon ? (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt={weatherData.condition}
            />
          ) : (
            <span>☀️</span>
          )}
        </div>
        <div className="weather-info">
          <div className="weather-temp">{weatherData.temperature}°C</div>
          <div className="weather-condition">{weatherData.condition}</div>
          <div className="weather-location">{weatherData.location}</div>
        </div>
      </div>
    </div>
  );
}
