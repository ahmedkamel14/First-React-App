import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    function navScroll() {
      if (window.scrollY > 20) {
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener('scroll',navScroll);
    return ()=>{
      window.removeEventListener('scroll',navScroll)
    }
  },[])
  return (
    <>
      <nav  className={`navbar navbar-expand-lg  fixed-top ${scrolled ? 'py-2' : 'py-4' } `}>
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bold text-uppercase text-white" to={'/'}>
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item  my-3 my-md-0">
                <NavLink className="nav-link p-2 fw-bold text-uppercase text-white"  to={'/about'}>
                  About
                </NavLink>
              </li>
              <li className="nav-item mb-3 mb-md-0">
                <NavLink className="nav-link p-2 fw-bold text-uppercase text-white" to={'/portfolio'}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link p-2 fw-bold text-uppercase text-white" to={'/contact'}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
