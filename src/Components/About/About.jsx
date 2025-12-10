import React from "react";

export default function About() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3  home">
        <h2 className="text-uppercase text-white fw-bold fs-1 mt-4 ">
          about component
        </h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className="line bg-white"></div>
          <div className="icon-wrapper">
            <i className="fa-solid fa-star text-white"></i>
          </div>
          <div className="line bg-white"></div>
        </div>
        <div className="content container">
          <div className="row px-5">
            <div className="parent col-12 col-md-6  ps-md-5">
            <div className="text-white ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
          <div className="parent col-12 col-md-6 pe-md-5">
            <div className="text-white ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
