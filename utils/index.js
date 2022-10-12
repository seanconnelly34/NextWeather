import {
  faCloud,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faCloudBolt,
  faCloudRain,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Converts a city to its lat and long coordinates
 *
 * @param {String} city
 * @return {Object} Returns object with lat and long coordinates
 */
export function cityLatLong(city) {
  switch (city) {
    case "Halifax":
      return { lat: "44.6476", long: "-63.5728" };
    case "Moscow":
      return { lat: "55.7558", long: "37.6173" };
    case "Mexico":
      return { lat: "19.4326", long: "-99.1332" };
    case "Miami":
      return { lat: "25.7616", long: "-80.1917" };
    case "New York":
      return { lat: "40.7128", long: "74.0060" };

    default:
      return { lat: "0", long: "0" };
  }
}

/**
 * Selects icon based on weather condition.
 *
 * @param {String} condition
 * @return {Icon} Returns fontawesome icon representing weather
 */
export function selectIcon(condition) {
  switch (condition) {
    case "Clouds":
      return faCloud;
    case "Rain":
      return faCloudShowersHeavy;
    case "Snow":
      return faSnowflake;
    case "Drizzle":
      return faCloudRain;
    case "Thunderstorm":
      return faCloudBolt;
    case "Clear":
      return faSun;

    default:
      return faMagnifyingGlass;
  }
}
