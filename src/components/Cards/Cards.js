import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((el) => {
      let { id, name, image, location, status } = el;
      return (
        <div key={id} className="col-4 position-relative mt-4">
          <div className={`${styles.cards}`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />

            <div className={`${styles.cardContent}`}>
              <div className="mb-4 fs-4 fw-bold">{name}</div>
              <div className="fs-6">last location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(function () {
            if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-primary`}
                >
                  {status}
                </div>
              );
            } else if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "no results found :/";
  }
  return display;
};

export default Cards;
