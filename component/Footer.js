import React from "react";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.main}>
      <div className={style.first}>
        <div className={style.f1}>
          <div className={style.f11}>
            <p>we'll buy it.</p>
            <h4>Because when it comes down to it, used cars are our thing.</h4>
          </div>
          <div className={style.f12}>
            <div className={style.button}>
              <button type="button">
                Check what your car's worth<i class="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.second}>
        <div className={style.s1}>
          <p>peddle</p>
          <div className={style.a}>
            <h4>777 West 6th St.</h4>
            <h4>Suite 300</h4>
            <h4>Austine, TX 78701</h4>
            <h3>877-586-5692</h3>
          </div>
        </div>
        <div className={style.s2}>
          <div className={style.s21}>
            <div className={style.s211}>
              <p>MORE</p>
              <div className={style.b}>
                <h4>Help Center</h4>
                <h4>How it works</h4>
                <h4>Blog</h4>
                <h4>FAQs</h4>
                <h4>Careers</h4>
              </div>
            </div>
            <div className={style.s212}>
              <p>PARTNER</p>
              <div className={style.c}>
                <h4>Buyers</h4>
                <h4>h4ublishers</h4>
                <h4>Carriers</h4>
                <h4>Charities</h4>
                <h4>Suppliers</h4>
              </div>
            </div>
            <div className={style.s213}>
              <p>CONNECT</p>
              <div className={style.d}>
                <h4>Facebook</h4>
                <h4>Twitter</h4>
                <h4>Instagram</h4>
              </div>
            </div>
          </div>
          <div className={style.s22}>
            <p>POPULAR</p>
          </div>
          <div className={style.s23}>
            <div className={style.s231}>
              <h4>Sell my car</h4>
              <h4>Cash for junk cars</h4>
              <h4>Car buyers</h4>
              <h4>Car value</h4>
              <h4>Sell used car</h4>
            </div>
            <div className={style.s232}>
              <h4>Los Angeles, CA</h4>
              <h4>Seattle, WA</h4>
              <h4>New York, NY</h4>
              <h4>Austin, TX</h4>
              <h4>San Diego, CA</h4>
            </div>
            <div className={style.s233}>
              <h4>Honda Civic</h4>
              <h4>Chevrolet Malibu</h4>
              <h4>Nissan Sentra</h4>
              <h4>Toyota Rav-4</h4>
              <h4>Toyota Corolla</h4>
            </div>
            <div className={style.s234}>
              <h4>Hyundai Sonata</h4>
              <h4>Toyota Camry</h4>
              <h4>Ford F-150</h4>
              <h4>Dodge Dart</h4>
              <h4>Ford Focus</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={style.third}>
        <div className={style.th1}>
          <p>© 2022 Peddle, LLC.</p>
          <p>Terms and conditions · Privacy policy · Accessibility · Status</p>
        </div>
        <div className={style.th2}>
          <i className="bi bi-arrow-up"></i>
        </div>
      </div>
    </div>
  );
}
