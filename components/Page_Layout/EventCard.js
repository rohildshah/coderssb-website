export default function EventCard(props) {
  function open(url) {
    window.open(url);
  }

  return (
    <figure onClick={() => open(props.url)}>
      <img src={props.pic} style={{width:330, height: 330}}/>
      <figcaption>{props.info}</figcaption>
    </figure>
  );
}
