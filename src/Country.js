import { useState, useEffect } from "react";
function Country(props) {
var [error, setError] = useState(null);
var [isLoaded, setIsLoaded] = useState(false);
var [countryName, setCountryName] = useState("Undefined");
var [countryCode, setCountryCode] = useState("Undefined");
  useEffect(() => {
  var title = props.title;
    try {
    var { lat, lon } = props;
    } catch (e) {}
  var url = `https://secure.geonames.org/findNearbyJSON?username=technical&lat=${lat}&lng=${lon}`;
    if (!lat || !lon) {
    url = `https://secure.geonames.org/searchJSON?username=technical&maxRows=1&q=${title}`;
    }
  console.log(url, title);
    fetch(url)
    .then(response => response.json())
    .then(result => {
    setIsLoaded(true);
    var { countryName, countryCode } = result.geonames[0];
    setCountryName(countryName);
    setCountryCode(countryCode);
    }).catch(error => {
    setIsLoaded(true);
    setError(error);
    });
  }, [props]);
  var message;
  if (error) {
  console.error(error)
  message = "Error";
  } else if (!isLoaded) {
  message = "Loading";
  } else if (countryCode && countryName) {
  message = (
    <>
    <img src={ `https://flagcdn.com/72x54/${countryCode.toLowerCase()}.png` } alt={countryCode}/>{countryName}
    </>
    )
  } else {
  message = "Unknown Error";
  }
  return (
    <span className="country">{message}</span>
  )
}
export default Country;