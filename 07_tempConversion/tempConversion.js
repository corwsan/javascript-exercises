const convertToCelsius = function(temp) {
  celsiusTemp = Math.round((temp - 32) * (5/9) * 10) / 10
  return celsiusTemp
};

const convertToFahrenheit = function(temp) {
  farenTemp = Math.round ((temp * (9/5) + 32) * 10) / 10
  return farenTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
