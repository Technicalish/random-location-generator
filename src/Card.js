import Country from "./CountryA";
function toggle(e) {
e.currentTarget.classList.toggle("show");
}
function Card(props) {
var { title, extract, coordinates, thumbnail, pageprops } = props;
var source = thumbnail.source.replace(thumbnail.width+"px", "360px");
  try {
  var { lat, lon } = coordinates[0];
  } catch(e) {}
  return (                     
    <div className="card" style={{height: thumbnail.height/thumbnail.width*344+"px"}} onDoubleClick={toggle}>
      <img src={source} alt={title}/>
      <div className="container">
        <div>
          <div className="bar">
            <Country lat={lat} lon={lon} title={title} wikibaseItem={pageprops["wikibase_item"]}/>
            <a className="map-url" target="_blank" rel="noreferrer" href={`https://maps.google.com?q=${title}`}>View in Google Maps</a>
          </div>
        </div>
        <div>
          <span className="title">{title}</span>
        </div>
        <div className="description">{extract}</div>
      </div>
    </div>
  );
}
export default Card;  