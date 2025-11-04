export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
  description: string;
}

export interface WeatherApiResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  sys: {
    country: string;
  };
}
