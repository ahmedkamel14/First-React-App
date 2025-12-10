import React from "react";

export default function Footer() {
  return <>
  <div className=" p-40 footer">
    <div className="footer-cards d-flex flex-wrap m-4 gap-2 gap-md-0">
      <div className="col-12 col-md-4 parent p-3 ">
      <div className="child text-center text-white">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
    </div>
    <div className="col-12 col-md-4 parent p-3 ">
      <div className="child text-center text-white">
        <h3>AROUND THE WEB</h3>
        <div className="icons d-flex justify-content-center align-items-center gap-2">
          <div className="icon-wrapper d-flex justify-content-center align-items-center"><i className="fa-brands fa-facebook"></i></div>
          <div className="icon-wrapper d-flex justify-content-center align-items-center"><i className="fa-brands fa-twitter"></i></div>
          <div className="icon-wrapper d-flex justify-content-center align-items-center"><i className="fa-brands fa-linkedin-in"></i></div>
          <div className="icon-wrapper d-flex justify-content-center align-items-center"><i className="fa-solid fa-globe"></i></div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 parent p-3 ">
      <div className="child text-center text-white">
        <h3>ABOUT FREELANCER</h3>
        <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
      </div>
    </div>
    </div>
  </div>
  <div className="footer-end text-center p-10">
    <p className="text-white  ">Copyright © Your Website 2021</p>
  </div>
  </>;
}
