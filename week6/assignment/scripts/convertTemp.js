// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

export default function getFahren(cityTemp, cityLocation) {
  let temp
  if (cityLocation == 'US'){
      temp = Math.floor(((9 / 5) * (cityTemp - 273.15) + 32).toFixed(2))
  } else {
      temp = Math.floor(cityTemp - 273.15)
  }
  return temp.toString()
}
