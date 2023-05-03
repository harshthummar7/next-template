import React from "react";
import style from "../styles/Navbar.module.css";
import { Button } from "react-bootstrap";

export default function Navbar() {
  return (
    <div className={style.main}>
      <div className={`${style.container} container`}>
        <div className={style.first}>
          <div className="hamburger">
            <i className="bi bi-menu-down"></i>
          </div>
          <div className={style.name}>paddle</div>
        </div>
        <div className={style.second}>
          <div className={style.chat_now}>
            chat now
            <i class="bi bi-chat"></i>
          </div>
          <div className={style.button}>
            <button type="button" class="btn btn-light">
              Light
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
