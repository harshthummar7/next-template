import React from "react";
import style from "../styles/Eleven.module.css";
import Icon from "./Icon";

export default function Eleven() {
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.first}>
            <p>WHAT PARTNERS ARE SAYING ABOUT US</p>
            <h4>
              From small family-owned business to national car buyers, our
              partners trust Peddle to source vehicles for their businesses
            </h4>
          </div>
          <div className={style.second}>
            <h4>
              Our experience with Peddle has been very pleasant. Everything runs
              smoothly each and every time. They strive to provide their
              partners the best service possible as well as the sellers. Each
              Peddle representative that we have dealt with has been very
              friendly, has good communication and gets the job well done. We
              have had the pleasure to have worked with two account managers and
              both have been absolutely exceptional . They are sure to assist
              you if need be and are always organized. I am delighted to say we
              are partnered with Peddle.
            </h4>
            <div className={style.s1}>
              <div className={style.s11}></div>
              <div className={style.s12}>
                <h3>Abilene Lozano </h3>
                <h4>at AB Towing scrap processing</h4>
              </div>
            </div>
          </div>
        </div>
        <Icon></Icon>
      </div>
    </>
  );
}
