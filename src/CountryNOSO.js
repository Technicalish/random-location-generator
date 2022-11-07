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
  var url = `https://nominatim.openstreetmap.org/reverse.php?zoom=3&format=jsonv2&lat=${lat}&lon=${lon}`;
    if (!lat || !lon) {
    url = `https://nominatim.openstreetmap.org/search.php?limit=1&format=jsonv2&addressdetails=1&q=${title}`;
    }
    function fetchHandler() {
    console.log(`URL: ${url}`)
      fetch(url)
      .then(response => response.json())
      .then(result => {
      setIsLoaded(true);
      var { country, country_code } = result.address || result[0].address;
      setCountryName(country);
      setCountryCode(country_code);
      }).catch(error => {
      setIsLoaded(true);
      setError(error);
      });
    }
    var timestamp = window.localStorage.getItem(" timestamp") || Date.now;
    if ((Date.now - timestamp) > 1000) {
    fetchHandler();
    } else {
    var newTimestamp = Date.now - timestamp + 1000;
    setTimeout(fetchHandler, newTimestamp);
    window.localStorage.setItem("timestamp", newTimestamp);
    }
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