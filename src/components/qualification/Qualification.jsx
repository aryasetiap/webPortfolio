import React from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor Degree</h3>
                <span className="qualification__subtitle">
                  University of Lampung
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Senior High School</h3>
                <span className="qualification__subtitle">
                  SMA Negeri 1 Kalirejo
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Junior High School</h3>
                <span className="qualification__subtitle">
                  SMP Negeri 1 Kalirejo
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Elementary School</h3>
                <span className="qualification__subtitle">
                  SD Negeri 1 Sridadi
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2010 - 2016
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Freelance Web Developer
                </h3>
                <span className="qualification__subtitle">Anywhere</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Freelance UI/UX Designer
                </h3>
                <span className="qualification__subtitle">Anywhere</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
