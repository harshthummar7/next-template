import React from "react";
import style from "../styles/Box.module.css";

export default function Box() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <p>CAR BUYING MADE EASY</p>
        <h4>
          Whether you're just starting out or have decades under your belt, we
          partner with you to grow business your way on your terms
        </h4>
      </div>
    </div>
  );
}
