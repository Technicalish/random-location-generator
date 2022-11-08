import Elongate from "./Elongate";
function Data() {
var places = ["Victoria Falls", "Schönbrunn Palace", "Maiden Tower (Baku)", "Iguazú Falls", "Madara Rider", "Cambodia", "Koh Rong", "San Andres Island", "Tangasseri Lighthouse", "Morgan House, Kalimpong", "Doctor's Cave Beach Club", "Dunn's River Falls", "Beirut Central District", "Namche Bazaar", "Pakistan Monument", "Fairy Meadows", "Manhattan", "Taipei", "Colosseum", "Great Wall of China", "Taj Mahal", "Eiffel Tower", "Egyptian pyramids", "Grand Canyon", "The Serengeti", "Lake Sorapiss", "Redwood National and State Parks", "Great Barrier Reef", "Rio de Janeiro", "Acropolis Museum", "Vatican Museums", "Imperial Treasury, Vienna", "Scrovegni Chapel", "Solomon R. Guggenheim Museum"];
var randomPlaces = [];
var i = Math.floor(Math.random() * 14 + 7);
//console.log(`Length: ${i}`);
  while (i > 0) {
  var randomPlace = places[Math.floor(Math.random() * places.length)];
    if (!randomPlaces.includes(randomPlace)) {
    randomPlaces.push(randomPlace);
    i--;
    }
  }
return <Elongate randomPlaces={randomPlaces}/>;
}
export default Data;