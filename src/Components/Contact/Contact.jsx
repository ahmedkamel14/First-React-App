import React from "react";

export default function Contact() {
  return (
    <>
      <div className="d-flex flex-column justify-content-start pt-4 align-items-center   portfolio">
        <h2 className="text-uppercase text-center mb-3  fw-bold fs-1 mt-4 ">
          contact section
        </h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className="line "></div>
          <div className="icon-wrapper">
            <i className="fa-solid fa-star "></i>
          </div>
          <div className="line "></div>
        </div>
        <form action="" className="mt-5 p-3 pt-5 w-50 mb-4">
          <input id="userName" type="text" className="form-control py-3 border-0 border-bottom " placeholder="userName" />
          <label htmlFor="userName" >userName :</label>
          <input id="userAge" type="number" className="form-control py-3 border-0 border-bottom " placeholder="userAge" />
          <label htmlFor="userAge">userAge :</label>
          <input id="userEmail" type="email" className="form-control py-3 border-0 border-bottom " placeholder="userEmail" />
          <label htmlFor="userEmail">userEmail :</label>
          <input id="userPassword" type="password" className="form-control py-3 border-0 border-bottom " placeholder="userPassword" />
          <label htmlFor="userPassword">userPassword :</label>
          <button className="d-block border-0 rounded-2 py-2 px-3" onClick={(e)=> e.preventDefault()}>send Message</button>
        </form>
      </div>
    </>
  );
}
