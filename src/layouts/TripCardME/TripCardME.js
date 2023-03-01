import React from "react";
import "../TripCardME/TripCardME.styles.css";
const TripCard = ({ props }) => {
  return (
    <>
      <div className="card-trip-me container_trip">
        <div className="card-trip__details">
          <div>
            <span className="card-trip__title">{props.title}</span>
          </div>
          <div>
            <span className="card-trip__date">{props.date}</span>
          </div>
        </div>
        <br />
        <div>
          <span className="card-trip__description">
            {props.tripDescription}
          </span>
        </div>
      </div>
    </>
  );
};

export default TripCard;
