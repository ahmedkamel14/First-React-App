import React, { useState } from "react";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [selectedImage, setselectedImage] = useState(null);
  

  function openLightBox(imgSrc) {
    setShow(true);
    setselectedImage(imgSrc);
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-start pt-4 align-items-center gap-3  portfolio">
        <h2 className="text-uppercase text-center fw-bold  fs-1 mt-4 ">
          portfolio component
        </h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className="line "></div>
          <div className="icon-wrapper">
            <i className="fa-solid fa-star "></i>
          </div>
          <div className="line "></div>
        </div>
        <div className="container mb-4">
          <div className="row g-5">
            <div className="col-md-4">
              <div className="img-wrapper position-relative " onClick={()=> openLightBox(port1) }>
                <img src={port1}  className="w-100 rounded-3" alt="" />
                <div className="layer d-flex justify-content-center align-items-center  w-100 position-absolute top-0 bottom-0 rounded-3">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-wrapper position-relative " onClick={()=> openLightBox(port2) }>
                <img src={port2}  className="w-100 rounded-3" alt="" />
                <div className="layer d-flex justify-content-center align-items-center  w-100 position-absolute top-0 bottom-0 rounded-3">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-wrapper position-relative " onClick={()=> openLightBox(port3) }>
                <img src={port3}  className="w-100 rounded-3" alt="" />
                <div className="layer d-flex justify-content-center align-items-center  w-100 position-absolute top-0 bottom-0 rounded-3">
                  <i  className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-wrapper position-relative " onClick={()=> openLightBox(port1) }>
                <img src={port1}  className="w-100 rounded-3" alt="" />
                <div className="layer d-flex justify-content-center align-items-center  w-100 position-absolute top-0 bottom-0 rounded-3">
                  <i  className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-wrapper position-relative " onClick={()=> openLightBox(port2) }>
                <img src={port2}  className="w-100 rounded-3" alt="" />
                <div className="layer d-flex justify-content-center align-items-center  w-100 position-absolute top-0 bottom-0 rounded-3">
                  <i  className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-wrapper position-relative " onClick={()=> openLightBox(port3) }>
                <img src={port3}  className="w-100 rounded-3" alt="" />
                <div className="layer d-flex justify-content-center align-items-center  w-100 position-absolute top-0 bottom-0 rounded-3">
                  <i  className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <div id="lightBoxContainer" onClick={()=> setShow(false)} className="d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0 ">
        <img src={selectedImage} onClick={(e)=> e.stopPropagation() }  width={600} alt="" />
      </div>}
    </>
  );
}
