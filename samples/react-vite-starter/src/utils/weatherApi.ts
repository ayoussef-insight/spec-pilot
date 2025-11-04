import type { WeatherApiResponse, WeatherData } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeatherData(city: string = 'Sydney'): Promise<WeatherData> {
  try {
    if (!API_KEY || API_KEY === 'your_api_key_here') {
      // Return mock data if no API key is configured
      return getMockWeatherData();
    }

    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data: WeatherApiResponse = await response.json();

    return {
      location: `${data.name}, ${data.sys.country}`,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      icon: data.weather[0].icon,
      description: data.weather[0].description,
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return getMockWeatherData();
  }
}

function getMockWeatherData(): WeatherData {
  return {
    location: 'Sydney, AU',
    temperature: 22,
    condition: 'Partly Cloudy',
    icon: '02d',
    description: 'partly cloudy',
  };
}
