import React from "react";
import style from "../styles/Icon.module.css";

export default function Icon() {
  return (
    <div className={style.main}>
      <div className={style.icon}>
        <i className="bi bi-arrow-left"></i>
      </div>
      <div className={style.icon}>
        <i className="bi bi-arrow-right"></i>
      </div>
    </div>
  );
}
