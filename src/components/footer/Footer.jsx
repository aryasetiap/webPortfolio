import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Arya Setia Pratama</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/aryasetiap/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/aryasetiap"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.instagram.com/aryasetia_p/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Arya Setia Pratama. All right reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
