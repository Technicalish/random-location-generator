import { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";
function Elongate(props) {
var { randomPlaces } = props;
var [error, setError] = useState(null);
var [isLoaded, setIsLoaded] = useState(false);
var [items, setItems] = useState([]);
  useEffect(() => {
  var url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts|coordinates|pageimages|pageprops&exlimit=${randomPlaces.length}&exsentences=2&exintro&explaintext&redirects=1&titles=${randomPlaces.join("|")}`;
    fetch(url)
    .then(response => response.json())
    .then((result) => {
      setIsLoaded(true);
      setItems(result.query.pages);
    })
    .catch((error) => {
      setIsLoaded(true);
      setError(error);
    })
  }, [randomPlaces]);

  if (error) {
  return <Loading length={randomPlaces.length} error={error}/>;
  } else if (!isLoaded) {
  return <Loading length={randomPlaces.length}/>;
  } else {
  return Object.values(items).map(item => {
    return <Card { ...item } key={item.pageid}/>
    })
  }
}
export default Elongate;