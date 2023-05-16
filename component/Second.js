import React from "react";
import style from "../styles/Second.module.css";

export default function Second() {
  return (
    <div className={`${style.container} container`}>
      <div className={style.first}>
        <div className={style.left}>
          <p>LET'S</p>
        </div>
        <div className={style.center}>
          <img src="doller.jpeg" alt="Your image" />
        </div>
        <div className={style.right}>
          <p>BUY</p>
        </div>
      </div>
      <div className={style.second}>
        <p>CARS TOGETHER</p>
      </div>
      <div className={style.mob}>
        <img src="doller.jpeg" alt="Your image" />
        <p className={style.one}>LET'S</p>
        <p className={style.two}>BUY CARS </p>
        <p className={style.two}>TOGETHER</p>
      </div>
      <div className={style.third}>
        <p>
          We're the simple,modern,awesome way for people to sell and buy end-of-
        </p>
        <p>
          lif and junk cars,By connecting buyers like you with car owners across
          all 50
        </p>
        <p>states,We move over 500,000 cars every year</p>
      </div>
    </div>
  );
}
