import React from "react";
import style from "../styles/Ten.module.css";

export default function Ten() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <p>We're buying cars left and right</p>
        <div className={style.button}>
          <button type="button">
            Become a buyer<i class="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
