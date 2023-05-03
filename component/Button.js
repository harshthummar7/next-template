import React from "react";
import style from "../styles/Button.module.css";

export default function Button() {
  return (
    <div className={style.main}>
      <div className={style.button}>
        <button type="button">
          Become a buyer<i class="bi bi-arrow-up-right"></i>
        </button>
      </div>
      <div className={style.icon}>
        <i class="bi bi-chevron-compact-down"></i>
      </div>
    </div>
  );
}
