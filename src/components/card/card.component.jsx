import React from "react";
import "../card/card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set1&180x180`}
      alt="person"
    />
    <h1>{props.monster.name}</h1>
  </div>
);
