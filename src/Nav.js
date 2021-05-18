import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  // This entire thing we do to  show that when we scroll down then only our nav get a background
  // color and else below scrolling 100px in y nav should not have that black background color.
  // So I added a event listener which listens to the scoll event and update the show state.

  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        //When we scroll more than 100px in y axis
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
        className="nav__logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
