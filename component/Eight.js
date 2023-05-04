import React from "react";
import style from "../styles/Eight.module.css";

export default function Eight() {
  return (
    <div className={style.main}>
      <div className={style.first}>
        <img src="people.png" alt="Your image" />
      </div>
      <div className={style.second}>
        <p>BUY FROM REAL PEOPLE</p>
        <h4>
          You have anation of car sellers at your fingertips. Arrange pickup and
          transport with seller on your schedule.
        </h4>
        <div className={style.container}>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-person"></i>
            </div>
            <p>Largest pool of sellers to fuel your inventory</p>
          </div>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-truck"></i>
            </div>
            <p>Set flexible pickup times with sellers</p>
          </div>
          <div className={style.part}>
            <div className={style.one}>
              <i className="bi bi-credit-card"></i>
            </div>
            <p>Simple pricing and only pay for what you pick up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
