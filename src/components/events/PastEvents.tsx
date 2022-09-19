import React from "react";
import Styles from "../../scss/events/events.module.scss";
import Carousel from "../Carousel";
import EventCarousel from "./eventCarousel";
import data from "../../assets/data/pastEventsData";

function UpcomingEvents() {
  return (
    <div className={Styles.container}>
      <h2>Past Events</h2>
      <Carousel>
        {data.map((data) => (
          <EventCarousel
            key={data.id}
            name={data.name}
            image={data.image}
            des={data.description}
            date={data.date}
            btn={data.buttonTxt}
            pastEvent={data.pastEvent}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default UpcomingEvents;