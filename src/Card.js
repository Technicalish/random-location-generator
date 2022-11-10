import Country from "./CountryA";
function toggle(e) {
e.currentTarget.classList.toggle("show");
}
function Card(props) {
var { title, extract, thumbnail, pageprops } = props;
var source = thumbnail.source.replace(thumbnail.width+"px", "304px");
  var { width, height } = thumbnail;
  height = 304 * height / width;
  width = "304px";
  height += "px";
  return (                     
    <div className="card" style={{width, height}} onDoubleClick={toggle}>
      <img src={source} alt={title}/>
      <div className="container">
        <div>
          <div className="bar">
            <Country wikibaseItem={pageprops["wikibase_item"]}/>
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