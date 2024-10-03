import { displayHourlyTemp, displayWeatherDetails } from './dom';
import { getWeather } from './getWeatherResponse';

export async function weatherDetails(details) {
  displayWeatherDetails(details);
}

export async function hourlyTemp(hours) {
  displayHourlyTemp(hours);
}
