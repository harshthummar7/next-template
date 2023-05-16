import React from "react";
import style from "../styles/Six.module.css";

export default function Six({ data }) {
  return (
    <div className={style.main}>
      <div className={style.first}>
        <p>{data.p}</p>
        <img src={data.img} alt="Your image" />
      </div>
      <div className={style.second}>
        <p>{data.p}</p>
        <h4>{data.h4}</h4>
        <div className={style.container}>
          <div className={style.part}>
            <div className={style.one}>
              <i className={data.div1[0]}></i>
            </div>
            <p>{data.div1[1]}</p>
          </div>
          <div className={style.part}>
            <div className={style.one}>
              <i className={data.div2[0]}></i>
            </div>
            <p>{data.div2[1]}</p>
          </div>
          <div className={style.part}>
            <div className={style.one}>
              <i className={data.div3[0]}></i>
            </div>
            <p>{data.div3[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
