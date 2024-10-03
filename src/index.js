import moment from 'moment-timezone';
import getWeather from './utils/getWeatherResponse';

import './style.css';
import { displayHeaderDate } from './utils/dom';

const searchInput = document.querySelector('.search-bar-input');
const searchButton = document.querySelector('.search-bar-button');
const searchBarNotice = document.querySelector('.search-bar-notice');
const noticeCloseButton = document.querySelector('.search-bar-notice a');

// initial data
getWeather();
displayHeaderDate();

// opens the tooltip
searchInput.addEventListener('focus', () => {
  searchBarNotice.style.display = 'block';
});

// closes the tooltip
noticeCloseButton.addEventListener('click', () => {
  searchBarNotice.style.display = 'none';
});

// search button
searchButton.addEventListener('click', () => {
  getWeather(searchInput.value);
});
