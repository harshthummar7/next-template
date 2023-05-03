import style from "../styles/Fifth.module.css";
import React from "react";

export default function Fifth() {
  return (
    <div className={style.main}>
      <div className={style.first}>
        <img src="phone.png" alt="Your image" />
        <p>Smart and simple</p>
        <h4>
          Powerd by smart tools, modern tech, and expert account managers with
          local knowlage of pricing and competition
        </h4>
      </div>
      <div className={style.second}>
        <img src="binocular.jpg" alt="Your image" />
        <p>Customized searching</p>
        <h4>
          Whether you want cars for scrap, used parts, or resale, you tell us
          what you want and for how much, and we'll find it
        </h4>
      </div>
      <div className={style.third}>
        <img src="car.jpeg" alt="Your image" />
        <p>Built to last</p>
        <h4>
          Our buyer partners fuel our long-term growth across the country. While
          our nationwide marketing drives new inventory back to you
        </h4>
      </div>
    </div>
  );
}
