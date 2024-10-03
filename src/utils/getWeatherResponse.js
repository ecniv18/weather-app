import moment from 'moment-timezone';
import { hourlyTemp, weatherDetails } from './catchData';

export default async function getWeather(searchQuery) {
  try {
    const data = await getWeatherResponse(searchQuery);

    weatherDetails(data.details);
    hourlyTemp(data.hours);

    if (!data.ok) {
      throw new Error(data.ok);
    }
  } catch (err) {
    console.log(err);
  }
}

async function getWeatherResponse(searchQuery) {
  const userTimeZone = moment.tz.guess().split('/')[1].toLowerCase();
  const query = searchQuery === undefined ? userTimeZone : searchQuery;
  const formattedQuery = query.includes(' ')
    ? query.split(' ').join('_')
    : query;

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formattedQuery}?unitGroup=metric&key=6Z5DB8PU92WGNGEAWLSMB5SW4&contentType=json`
    );
    const data = await response.json();

    console.log(data);
    if (!response.ok) {
      throw new Error(response.ok);
    }
    return {
      details: {
        timezone: data.timezone,
        dateTime: data.days[0].datetime,
        icon: data.days[0].icon,
        condition: data.days[0].conditions,
        headDescription: data.description,
        description: data.days[0].description,
        humidity: data.days[0].humidity,
        temperature: {
          current: data.days[0].temp,
          min: data.days[0].tempmin,
          max: data.days[0].tempmax,
          feelsLike: data.days[0].feelslike,
          feelsLikeMin: data.days[0].feelslikemin,
          feelsLikeMax: data.days[0].feelslikemax,
        },
        windConditions: {
          windGust: data.days[0].windgust,
          windSpeed: data.days[0].windspeed,
          windDirection: data.days[0].winddir,
        },
      },
      hours: {
        '12am': {
          temp: data.days[0].hours[0].temp,
          conditions: data.days[0].hours[0].conditions,
        },
        '3am': {
          temp: data.days[0].hours[3].temp,
          conditions: data.days[0].hours[3].conditions,
        },
        '6am': {
          temp: data.days[0].hours[6].temp,
          conditions: data.days[0].hours[6].conditions,
        },
        '9am': {
          temp: data.days[0].hours[9].temp,
          conditions: data.days[0].hours[9].conditions,
        },
        '12pm': {
          temp: data.days[0].hours[12].temp,
          conditions: data.days[0].hours[12].conditions,
        },
        '3pm': {
          temp: data.days[0].hours[15].temp,
          conditions: data.days[0].hours[15].conditions,
        },
        '6pm': {
          temp: data.days[0].hours[18].temp,
          conditions: data.days[0].hours[18].conditions,
        },
        '9pm': {
          temp: data.days[0].hours[21].temp,
          conditions: data.days[0].hours[21].conditions,
        },
      },
    };
  } catch (err) {
    console.log(err);
  }
}
