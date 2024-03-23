import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          {/* HTML */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>

          {/* CSS */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>

          {/* JavaScript */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          {/* Bootstrap */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* Tailwind */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* React */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
