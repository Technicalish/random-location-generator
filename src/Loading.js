function Loading(props) {
var { length } = props;
var cards = [];
  for (let i = 0; i < length; i++) {
    cards.push(
      <div className="card default" key={i}></div>
    )
  }
return cards;
}
export default Loading;