import React from "react";
import style from "../styles/Six.module.css";

export default function Six() {
  return (
    <div className={style.main}>
      <div className={style.first}>
        <img src="car_type.png" alt="Your image" />
      </div>
      <div className={style.second}>
        <p>TELL US WHAT YOU WANT</p>
        <h4>
          Looking for something kinda specific?Adjust your bid setting within
          the buyer portal by year, make, model, or condition and that's what we
          will serve up to you
        </h4>
        <div className={style.container}>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-sliders"></i>
            </div>
            <p>Bid by year/make/model</p>
          </div>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-car-front"></i>
            </div>
            <p>Set minimum conditions for components</p>
          </div>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-pin-map-fill"></i>
            </div>
            <p>One-on-one expertise to help build your business</p>
          </div>
        </div>
      </div>
    </div>
  );
}
