import React from "react";
import "../card/card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      src="https://images.generated.photos/c3HDiZxu1D_Gqwtty0aXmYiG7u1UU_P9rQNwDF_wrDY/rs:fit:32:32/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTk4MDcuanBn.jpg"
      alt="person"
    />
    <h1>{props.monster.name}</h1>
  </div>
);
