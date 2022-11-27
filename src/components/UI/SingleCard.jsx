import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const SingleCard = ({item}) => {
  const { title, icon, percentage,color } = item;
  return (
    <div className="single__card">
      <div className="card__icon">
        <i class={icon}></i>
        <h4>{title}</h4>
      </div>
      <div className="progress__bar">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: "#fff",
            trailColor: "#0b0c28",
            textSize: "18px",
          })}
        />
      </div>
    </div>
  );
};

export default SingleCard;
