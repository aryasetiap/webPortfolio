import React from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = React.useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section services" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">what i offer</span>

      <div className="services__container container grid">
        {/* Ui/Ux Desainer */}
        <div className="services__content">
          {/* show default start */}
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          {/* show default end */}

          {/* show on click start */}
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experienced in crafting various UI/UX designs across
                    multiple platforms.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Deeply understand user needs, ensuring each design
                    prioritizes user experience aspects.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Proficient in Adobe XD, Figma, and Sketch.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* show on click end */}
        </div>

        {/* Frontend Developer */}
        <div className="services__content">
          {/* show default start */}
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          {/* show default end */}

          {/* show on click start */}
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Proficient in HTML, CSS, and JavaScript to create engaging
                    and interactive user interfaces.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experienced in using front-end frameworks like React.js and
                    Vue.js to accelerate development and enhance application
                    performance.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Skilled in designing responsive interfaces, ensuring
                    consistent and optimal user experiences across various
                    devices and screen sizes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* show on click end */}
        </div>

        {/* Backend Developer */}
        <div className="services__content">
          {/* show default start */}
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          {/* show default end */}

          {/* show on click start */}
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Proficient in designing, managing, and optimizing databases
                    using MySQL and MongoDB, ensuring smooth data storage and
                    retrieval.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experience in designing and developing RESTful APIs with
                    endpoints that are easily accessible and well-documented,
                    facilitating seamless integration with front-end or mobile
                    applications.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Prioritizing performance and scalability, utilizing best
                    practices and technologies such as caching mechanisms and
                    microservices architecture to build backend solutions
                    capable of handling high loads and scaling as needed.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* show on click end */}
        </div>
      </div>
    </section>
  );
};

export default Services;
