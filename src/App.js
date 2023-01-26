import { Component } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <FullCalendar
          eventClick={(e) => console.log(e.event)}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            {
              title: "Md. Ruhin Mia - Present",
              date: "2023-01-18",
              backgroundColor: "green",
            },
            {
              title: "Present",
              date: "2023-01-18",
              backgroundColor: "green",
            },
            {
              title: "Late",
              date: "2023-01-18",
              backgroundColor: "red",
            },
            {
              title: "Late",
              date: "2023-03-18",
              backgroundColor: "red",
            },
          ]}
        />
      </div>
    );
  }
}
