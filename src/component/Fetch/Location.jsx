import React from "react";

function LocationDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Location: {props.location}</h3>
      <h3>Income: {props.income}</h3>
      <h3>Expenses: {props.expenses}</h3>
    </div>
  );
}

export default LocationDetail;
