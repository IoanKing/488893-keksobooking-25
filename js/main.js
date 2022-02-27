const OFFERS_COUNT = 10;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHEK_IN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHEK_OUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const TITLES = [
  'Уютная квартира, с видом на море.',
  'Небольшая квартирка, с мансардой.',
  'Квартира класса люкс, все включено',
  'Двухкомнатная квартира в центре.',
  'Коната в общежитии, дешево.',
  'Милая, уютная квартира в центре.',
  'Красивый уютный домик рядом с болотом.',
  'Изба в лесу на курьих ножках.',
  'Домик с приведениями на холму.',
  'Трехкомнатная квартира на окране далеко от метро. ',
  'Апартаменты с прекрасным видом на торговый центр.',
  'Апартаменты на мансарде',
  'Пентхаус в небоскребе. Лифт не работает.'
];

const DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
  'Описание 6',
  'Описание 7',
  'Описание 8'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const LOCATION_LAT = {
  min: 35.65000,
  max: 35.70000
};

const LOCATION_LNG = {
  min: 139.70000,
  max: 139.80000
};

/**
* Функция, возвращающая случайное целое число из переданного диапазона включительно.
* источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*
* @param {number} a - Значение диапазона (либо минимальное либо максимальное).
* @param {number} b - Значение диапазона (либо минимальное либо максимальное).
* @return {number} - Целое число
*/
const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
*
* @param {number} min - Минимальное значение диапазона.
* @param {number} max - Максимальное значение диапазона.
* @param {number} decimalPlaces - Число знаков после зяпятой.
* @return {number} - Число с плавающей точкой
*/
const getRandomFloat = (a, b, decimalPlaces = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(decimalPlaces);
};

/**
* Функция, возвращающая случайный элемент массива.
*
* @param {array} elements - Массив с элементами.
* @return {object} - Элемент массива.
*/
const getRandomArrayElement = (elements) => {
  const result = elements[getRandomNumber(0, elements.length - 1)];
  return result;
};

/**
* Функция, преобразующая число от 0 до 99 в строку.
* В формате 01, 02, ... 99.
*
* @param {number} number - положительное целое число.
* @return {string} - строка с числом.
*/
const getNumber = (number) => {
  const result = (`0${number}`).slice(-2);
  return result;
};

/**
* Функция, генерирующая массив случайной длины из списка значений,
* без повторений.
*
* @param {array} list - список значений.
* @return {array} - массив значений.
*/
const getRandomArrayByList = function (list) {
  const count = getRandomNumber(0, list.length - 1);
  const selectionList = list.slice();
  const result = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomNumber(0, selectionList.length - 1);
    result.push(selectionList[randomIndex]);
    selectionList.splice(randomIndex, 1);
  }

  return result;
};

//Вызов функции для исключения ошибки esLint
getRandomNumber(1, 10);

//Вызов функции для исключения ошибки esLint
getRandomFloat(1, 10, 2);

//Вызов функции для исключения ошибки esLint
getRandomArrayElement(FEATURES);

//Вызов функции для исключения ошибки esLint
getNumber();

//Вызов функции для исключения ошибки esLint
getRandomArrayByList(FEATURES);
