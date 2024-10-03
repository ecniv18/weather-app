export function displayWeatherDetails(details) {
  const location = document.querySelector('#location');
  const dateTime = document.querySelector('#date-time');
  const condition = document.querySelector('#weather-condition');
  const headDescription = document.querySelector('#head-description');
  const description = document.querySelector('#weather-description');
  const currentTemp = document.querySelector('#current-temp');
  const minTemp = document.querySelector('#min-temp');
  const maxTemp = document.querySelector('#max-temp');
  const humidity = document.querySelector('#humidity');
  const windGust = document.querySelector('#wind-gust');
  const windSpeed = document.querySelector('#wind-speed');
  const windDirection = document.querySelector('#wind-direction');

  location.innerText = details.timezone;
  dateTime.innerText = details.dateTime;
  condition.innerText = details.condition;
  headDescription.innerText = details.headDescription;
  description.innerText = details.description;
  currentTemp.innerText = details.temperature.current;
  minTemp.innerText = details.temperature.min;
  maxTemp.innerText = details.temperature.max;
  humidity.innerText = details.humidity;
  windGust.innerText = details.windConditions.windGust;
  windSpeed.innerText = details.windConditions.windSpeed;
  windDirection.innerText = details.windConditions.windDirection;
}

export function displayHourlyTemp(hours) {
  const twelveAm = document.querySelector('#twelve-am');
  const threeAm = document.querySelector('#three-am');
  const sixAm = document.querySelector('#six-am');
  const nineAm = document.querySelector('#nine-am');
  const twevlePm = document.querySelector('#twelve-pm');
  const threePm = document.querySelector('#three-pm');
  const sixPm = document.querySelector('#six-pm');
  const ninePm = document.querySelector('#nine-pm');

  const twelveAmCondition = document.querySelector('#twelve-am-condition');
  const threeAmConditon = document.querySelector('#three-am-condition');
  const sixAmCondition = document.querySelector('#six-am-condition');
  const nineAmCondition = document.querySelector('#nine-am-condition');
  const twevlePmCondition = document.querySelector('#twelve-pm-condition');
  const threePmCondition = document.querySelector('#three-pm-condition');
  const sixPmCondition = document.querySelector('#six-pm-condition');
  const ninePmCondition = document.querySelector('#nine-pm-condition');

  console.log(hours['12am']);
  twelveAm.innerText = hours['12am'].temp;
  threeAm.innerText = hours['3am'].temp;
  sixAm.innerText = hours['6am'].temp;
  nineAm.innerText = hours['9am'].temp;
  twevlePm.innerText = hours['12pm'].temp;
  threePm.innerText = hours['3pm'].temp;
  sixPm.innerText = hours['6pm'].temp;
  ninePm.innerText = hours['9pm'].temp;

  twelveAmCondition.innerText = hours['12am'].conditions;
  threeAmConditon.innerText = hours['3am'].conditions;
  sixAmCondition.innerText = hours['6am'].conditions;
  nineAmCondition.innerText = hours['9am'].conditions;
  twevlePmCondition.innerText = hours['12pm'].conditions;
  threePmCondition.innerText = hours['3pm'].conditions;
  sixPmCondition.innerText = hours['6pm'].conditions;
  ninePmCondition.innerText = hours['9pm'].conditions;
}

export function displayHeaderDate() {
  const newDate = new Date();
  const date = document.querySelector('#date-date');
  const time = document.querySelector('#date-time');

  const hours = new Date().getHours() % 12 || 12;
  const merediem = newDate.getHours() >= 12 ? 'PM' : 'AM';

  date.innerText = `${newDate.toLocaleString('default', {
    month: 'short',
  })} ${newDate.getDate()}`;

  time.innerText = `${hours} : ${newDate.getMinutes()} ${merediem}`;
}
