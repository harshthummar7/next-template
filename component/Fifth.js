import style from "../styles/Fifth.module.css";
import React from "react";

export default function Fifth({ data }) {
  return (
    <div className={style.main}>
      {data.map((value) => {
        return (
          <div className={style.first}>
            <img src={value.img} alt="Your image" />
            <p>{value.p}</p>
            <h4>{value.h4}</h4>
          </div>
        );
      })}
    </div>
  );
}
