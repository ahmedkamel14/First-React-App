import React from "react";
import logo from "../../assets/avataaars.svg"

export default function Home() {
  return <>
  <div className="d-flex flex-column justify-content-center align-items-center gap-3  home">
    
        <div className="img-wrapper text-center" >
            <img src={logo}  alt="person-avatar" />
        </div>
    <h2 className="text-uppercase text-white fw-bold fs-1 mt-4 ">start Framework</h2>
    <div className="d-flex justify-content-center align-items-center gap-3">
        <div className="line bg-white"></div>
        <div className="icon-wrapper">
            <i className="fa-solid fa-star text-white"></i>
        </div>
        <div className="line bg-white"></div>
    </div>
    <h6 className="text-white fw-normal">Graphic Artist - Web Designer - Illustrator</h6>
  </div>
  </>;
}
