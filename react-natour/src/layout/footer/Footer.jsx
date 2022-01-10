import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`
              ${require("../../assets/img/logo-green-small-1x.png")} 1x,
              ${require("../../assets/img/logo-green-small-1x.png")} 2x
            `}
            media="(max-width: 37.5em)"
            src={`${require("../../assets/img/logo-green-small-1x.png")}`}
          />
          <img
            srcSet={`
              ${require("../../assets/img/logo-green-1x.png")} 1x,
              ${require("../../assets/img/logo-green-2x.png")} 2x
            `}
            alt="Full logo"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#company" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#contact-us" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__item">
                <a href="#privacy-policy" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#terms" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Copyright &copy; 2021 by
            <a href="#about" className="footer__link">
              Ahmad Faisal
            </a>
            . Designed by Jonas Schmedtmann
          </p>
        </div>
      </div>
    </footer>
  );
}
