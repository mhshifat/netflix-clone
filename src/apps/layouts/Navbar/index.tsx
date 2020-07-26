import React, { useEffect, useState } from "react";
import "./index.css";

const Navbar = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    const listenerFunction = function () {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listenerFunction);

    return () => {
      window.removeEventListener("scroll", listenerFunction);
    };
  }, []);

  return (
    <div className={`nav ${handleShow ? "nav__black" : ""}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Avatar Logo"
      />
    </div>
  );
};

export default Navbar;
