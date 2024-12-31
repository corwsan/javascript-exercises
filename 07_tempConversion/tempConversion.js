const convertToCelsius = function(temp) {
  celsiusTemp = Math.round((temp - 32) * (5/9) * 10) / 10
  return celsiusTemp
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
