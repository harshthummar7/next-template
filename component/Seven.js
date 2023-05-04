import React from "react";
import style from "../styles/Seven.module.css";

export default function Seven() {
  return (
    <div className={style.main}>
      <div className={style.first}>
        <img src="price.png" alt="Your image" />
      </div>
      <div className={style.second}>
        <p>SET YOUR PRICES</p>
        <h4>
          Tell us the prices, conditions, and areas you want to buy in and we'll
          place bids for you automatically. Set your prices per vehicle or ton.
          View historical pricing in your area to stay competitive.
        </h4>
        <div className={style.container}>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-bullseye"></i>
            </div>
            <p>Set automated bidding for easy buying</p>
          </div>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-percent"></i>
            </div>
            <p>Set bids by vehicle or per ton</p>
          </div>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-chat-square"></i>
            </div>
            <p>Get real-time notifications for each new assignment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
