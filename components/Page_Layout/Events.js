import EventCard from "./EventCard";
import { events } from "../../utils/events";
import "../../css/Events.css";
import "../../css/Hover/reveal-top-right.css";

function DateConv(dateObj) {
  var minutes = "00";
  if (dateObj.getMinutes() != 0) {
    minutes = dateObj.getMinutes();
  }

  return (
    "" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getDate() +
    "/" +
    dateObj.getFullYear() +
    " @ " +
    (dateObj.getHours() - 12) +
    ":" +
    minutes +
    " PM"
  );
}

export default function Events() {
  return (
    <div>
      <div className="all" style={{ margin:'0'}}>
        <EventCard
          url={events[0].url}
          pic={events[0].pic}
          info={DateConv(events[0].start) + " Click to learn more!"}
        />
        <EventCard
          url={events[1].url}
          pic={events[1].pic}
          info={DateConv(events[1].start) + " Click to learn more!"}
        />

        <EventCard
          url={events[2].url}
          pic={events[2].pic}
          info={DateConv(events[2].start) + " Click to learn more!"}
        />
      </div>
    </div>
  );
}
