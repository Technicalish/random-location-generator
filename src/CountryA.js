import { useState, useEffect } from "react";
import CountryCode from "./CountryCode";
function Country(props) {
var [error, setError] = useState(null);
var [isLoaded, setIsLoaded] = useState(false);
var [countryName, setCountryName] = useState("Undefined");
var [countryCode, setCountryCode] = useState("Undefined");
  useEffect(() => {
  var sparqlQuery = (`SELECT ?item ?itemLabel WHERE {
  wd:${props.wikibaseItem} (wdt:P17|wdt:P131) ?item.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}`);
	var url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparqlQuery)}`;
    fetch(url, {
      headers: {
        Accept: "application/sparql-results+json"
      }
    })
    .then(response => response.json())
    .then(result => {
    var items = result.results.bindings;
    var { countryName, countryCode } = CountryCode(items);
    setIsLoaded(true);
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